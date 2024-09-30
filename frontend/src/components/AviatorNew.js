import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:8000");

function AviatorGame() {
  const [betAmount, setBetAmount] = useState(0);
  const [multiplier, setMultiplier] = useState(0);
  const [isBetPlaced, setIsBetPlaced] = useState(false);
  const [isBettingOpen, setIsBettingOpen] = useState(false); // Track whether betting is allowed
  const [isCrashed, setIsCrashed] = useState(false);
  const [winnings, setWinnings] = useState(0);

  useEffect(() => {
    // Listen for game start and multiplier reset
    socket.on("multiplier_reset", () => {
      setMultiplier(0);
      setIsCrashed(false);
      setIsBetPlaced(false);
      setBetAmount(0); // Reset bet amount
      setWinnings(0); // Reset bet amount
    });

    // Listen for betting window open
    socket.on("betting_open", () => {
      setIsBettingOpen(true); // Open betting window
    });

    // Listen for betting window close
    socket.on("betting_close", () => {
      setIsBettingOpen(false); // Close betting window
    });

    // Listen for multiplier updates
    socket.on("multiplier_update", (data) => {
      console.log(data.multiplier);
      setMultiplier(data.multiplier);
    });

    // Listen for crash event
    socket.on("plane_crash", (data) => {
      setIsCrashed(true);
    });

    // Listen for cash out success
    socket.on("cash_out_success", (data) => {
      setWinnings(data.winnings);
    });

    // Clean up on component unmount
    return () => {
      socket.off("multiplier_reset");
      socket.off("betting_open");
      socket.off("betting_close");
      socket.off("multiplier_update");
      socket.off("plane_crash");
      socket.off("cash_out_success");
    };
  }, []);

  const handlePlaceBet = () => {
    if (betAmount > 0 && isBettingOpen) {
      socket.emit("place_bet", betAmount);
      setIsBetPlaced(true);
    }
  };

  const handleCashOut = () => {
    if (multiplier > 0 && !isCrashed) {
      socket.emit("cash_out");
    }
  };

  return (
    <div>
      <h1>Aviator Game</h1>
      <p>Multiplier: {multiplier}x</p>

      {/* Show input only when multiplier is 0 and betting is open */}
      {multiplier === 0 && isBettingOpen && (
        <div>
          <input
            type="number"
            placeholder="Enter bet amount"
            value={betAmount}
            onChange={(e) => setBetAmount(e.target.value)}
            disabled={isBetPlaced}
          />
          {!isBetPlaced ? (
            <button onClick={handlePlaceBet}>Place Bet</button>
          ) : (
            <button onClick={handleCashOut} disabled={isCrashed}>
              Cash Out
            </button>
          )}
        </div>
      )}

      {/* Show cash out button if the user has placed a bet and multiplier is greater than 0 */}
      {isBetPlaced && multiplier > 0 && !isCrashed && (
        <div>
          <button onClick={handleCashOut}>Cash Out</button>
        </div>
      )}

      <p>Your winnings: ${winnings}</p>
    </div>
  );
}

export default AviatorGame;
