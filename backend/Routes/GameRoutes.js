const { gameLogic } = require('../Controllers/GameController');
const express = require('express')
const router = express.Router();
const io = require("socket.io");

router.post('/socketconnection',gameLogic);

router.post('/socketconnection', async (req, res) => {
    try {
      await gameLogic(io); // Call your game logic with the io instance
      res.status(200).send('Socket connection established'); // Send a success response
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error'); // Handle errors
    }
  });
  
  module.exports = router;