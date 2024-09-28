import React, { useState, useEffect } from 'react';
import { generateCrashMultiplier } from './utils/generateCrashMultiplier';

const AviatorGame = () => {
    const [multiplier, setMultiplier] = useState(1);
    const [isCrashed, setIsCrashed] = useState(false);
    const [isCashedOut, setIsCashedOut] = useState(false);
    const [bet, setBet] = useState(0);
    const [cashoutMultiplier, setCashoutMultiplier] = useState(2); // Default multiplier for cash-out

    // Function to start the game
    const startGame = () => {
        setIsCrashed(false);
        setIsCashedOut(false);
        let lambda = 0.1; // Lambda can be tuned based on game difficulty
        let crashMultiplier = generateCrashMultiplier(lambda);

        const interval = setInterval(() => {
            if (multiplier >= crashMultiplier) {
                setIsCrashed(true);
                clearInterval(interval);
            } else {
                setMultiplier(prev => prev + 0.01); // Multiplier increases gradually
            }
        }, 100); // Updates every 100ms
    };

    // Cash-out function
    const handleCashOut = () => {
        if (!isCrashed) {
            setIsCashedOut(true);
            // Calculate winnings based on cashoutMultiplier and bet
            let winnings = bet * multiplier;
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
