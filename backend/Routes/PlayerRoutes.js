const { placeBet } = require('../Controllers/PlayerController');
const express = require('express')
const router = express.Router();

router.put('/placeBet',placeBet);

module.exports =router;