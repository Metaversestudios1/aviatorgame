import React, { useState, useEffect } from 'react';
import { generateCrashMultiplier } from './utils/generateCrashMultiplier'; // Assuming this is for frontend animations or testing
import axios from 'axios'; // Assuming you are using axios for API calls

const AviatorGame = () => {
    const [multiplier, setMultiplier] = useState(1);
    const [isCrashed, setIsCrashed] = useState(false);
    const [isCashedOut, setIsCashedOut] = useState(false);
    const [bet, setBet] = useState(0);
    const [cashoutMultiplier, setCashoutMultiplier] = useState(2); // Default cash-out multiplier
    const [winnings, setWinnings] = useState(0); // Track winnings
    const [playerId, setPlayerId] = useState("1"); // Example playerId for testing

    // Function to start the game
    const startGame = async () => {
        setIsCrashed(false);
        setIsCashedOut(false);
        setMultiplier(1); // Reset multiplier
        let lambda = 0.1; // Lambda for difficulty tuning

        try {
            // Call backend to place the bet
            const response = await axios.post('http://localhost:8000/api/placeBet', {
                playerId,
                betAmount: bet,
                cashoutMultiplier,
            });

            let crashMultiplier = response.data.crashMultiplier;
            let playerWon = response.data.playerWon;

          //  console.log(`Crash multiplier: ${crashMultiplier}, Player won: ${playerWon}`);

            // Game logic for frontend animation
            const interval = setInterval(() => {
                setMultiplier(prev => {
                    if (prev >= crashMultiplier) {
                        setIsCrashed(true);
                        clearInterval(interval);
                    }
                    return prev + 0.01;
                });
            }, 100); // Update every 100ms

        } catch (error) {
            console.error('Error placing the bet', error);
        }
    };

    // Cash-out function
    const handleCashOut = async () => {
        if (!isCrashed) {
            setIsCashedOut(true);
            let winnings = bet * multiplier;
            setWinnings(winnings);
            alert(`You cashed out at ${multiplier.toFixed(2)}x! You win: $${winnings}`);
        }
    };

    return (
        <div>
            <h1>Aviator Game</h1>
            <p>Current Multiplier: {multiplier.toFixed(2)}x</p>
            <input
                type="number"
                placeholder="Bet Amount"
                value={bet}
                onChange={(e) => setBet(e.target.value)}
            />
            <button onClick={startGame}>Start Game</button>
            {!isCrashed && !isCashedOut && (
                <button onClick={handleCashOut}>Cash Out</button>
            )}
            {isCrashed && <p>The plane crashed! You lost your bet.</p>}
            {isCashedOut && <p>You cashed out successfully!</p>}
        </div>
    );
};

export default AviatorGame;
