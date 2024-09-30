const { updatebankdetails ,getbankdetails} = require('../Controllers/BankController');
const express = require('express')
const router = express.Router();

router.put('/updatebankdetails',updatebankdetails);
router.get('/getbankdetails',getbankdetails);


module.exports =router;