module.exports = (io) => {
  let users = {}; // Store user data and their bets
  let multiplier = 0; // Starting multiplier
  let crashPoint = 0; // Where the plane crashes

  const startGame = () => {
    console.log('Game started');
    
    // Generate random crash point (e.g., between 1.5x to 10x)
    crashPoint = Math.random() * (10 - 1.5) + 1.5;
    console.log(`Crash point set at: ${crashPoint.toFixed(2)}x`);

    multiplier = 0; // Reset multiplier
    io.emit('multiplier_reset', { multiplier: 0 }); // Notify frontend to reset and show bet input

    setTimeout(() => {
      io.emit('betting_open', { isBettingOpen: true }); // Open betting window for 5 seconds
      console.log('Betting is now open.');

      setTimeout(() => {
        // Close betting and start increasing multiplier
        io.emit('betting_close', { isBettingOpen: false });
        console.log('Betting closed. Game is starting.');

        let gameInterval = setInterval(() => {
          multiplier += 0.1; // Increment multiplier
          io.emit('multiplier_update', { multiplier: multiplier.toFixed(2) });

          // If multiplier exceeds crash point, the plane crashes
          if (multiplier >= crashPoint) {
            clearInterval(gameInterval);
            io.emit('plane_crash', { crashPoint: crashPoint.toFixed(2) });

            // After crash, reset game after 5 seconds
            startGame()
          }
        }, 100); // Every 100ms, increase multiplier by 0.1x
      }, 5000); // 5 seconds for placing bets
    }, 0);
  };

  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    users[socket.id] = { betAmount: 0, hasCashedOut: false };

    socket.on('place_bet', (betAmount) => {
      if (multiplier === 0) { // Only allow bets before the multiplier starts
        users[socket.id].betAmount = betAmount;
        users[socket.id].hasCashedOut = false;
        console.log(`User ${socket.id} placed a bet of $${betAmount}`);
      }
    });

    socket.on('cash_out', () => {
      if (multiplier > 0 && !users[socket.id].hasCashedOut) {
        const winnings = users[socket.id].betAmount * multiplier;
        io.to(socket.id).emit('cash_out_success', { winnings: winnings.toFixed(2) });
        users[socket.id].hasCashedOut = true;
        console.log(`User ${socket.id} cashed out with $${winnings.toFixed(2)} at ${multiplier.toFixed(2)}x`);
      }
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
      delete users[socket.id];
    });
  });

  // Start the game when the server is ready
  startGame();
};
