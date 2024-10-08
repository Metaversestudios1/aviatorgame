const { gameLogic } = require('../Controllers/GameController');
const express = require('express')
const router = express.Router();

router.post('/socketconnection',gameLogic);

module.exports =router;