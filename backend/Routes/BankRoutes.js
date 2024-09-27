const { updatebankdetails } = require('../Controllers/BankController');
const express = require('express')
const router = express.Router();

router.put('/updatebankdetails',updatebankdetails);

module.exports =router;