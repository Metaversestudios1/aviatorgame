const {   createmanualpayment,
    updatemanualpayment
    // createRazorpayPayment,
    // verifyRazorpayPayment
    ,getpayment} = require('../Controllers/PaymentController');
const express = require('express');
const router = express.Router();

router.post('/createmanualpayment',createmanualpayment);
// router.put('/updatemanualpayment',updatemanualpayment);
// router.get('/createRazorpayPayment',createRazorpayPayment);
// router.post('/verifyRazorpayPayment',verifyRazorpayPayment);
router.get('/getpayment',getpayment);



module.exports=router;
