const {   createmanualpayment,
    updatemanualpayment,
    createRazorpayPayment,
    verifyRazorpayPayment} = require('../Controllers/BetController');
const express = require('express');
const router = express.Router();

router.post('/createmanualpayment',createmanualpayment);
router.put('/updatemanualpayment',updatemanualpayment);
router.get('/createRazorpayPayment',createRazorpayPayment);
router.post('/verifyRazorpayPayment',verifyRazorpayPayment);


module.exports=router;
P