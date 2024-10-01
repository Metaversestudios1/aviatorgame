const Transaction = require('../Models/Transaction');
// const razorpay = require('razorpay');
const { options } = require('../Routes/PlayerRoutes');

// const razorpay =new razorpay({
//     Key_id:process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_KEY_SECRET,
// })

const createmanualpayment = async(req,res) =>{
    const { playerId ,amount , transactionId, transactionType } = req.body;
    try{
        const payment = new Payment({
            playerId,
            paymentType:'manual',
            transactionType,
            amount,
            transactionId,
            'status':'pending',
        })
        payment.save();
        res.status(201).json({success:true})

    }catch(err){
        res.status(500).json({success:false,message:"error creating manual payment",error:err.message})
    }
}

const updatemanualpayment= async(req,res)=>{
    const {paymentId , status} = req.body;
    try{
        const payment = await Payment.findById(paymentId);
        if(!payment || payment.paymentType !== 'manual'){
            return res.status(404).json({success:false,message:"manual payment not found"});
        }
        payment.status = status;
        await payment.save();
        
    }catch(err){
        res.status(500).json({success:false,message:"error updating manual payment",error:err.message})
  
    }
}

// const createRazorpayPayment = async (req, res) => {
//     const { playerId, amount } = req.body;

//     try {
//         const options = {
//             amount: amount * 100, // Amount in paise
//             currency: 'INR',
//             receipt: `receipt_${Math.random().toString(36).substring(2)}`,
//         };

//         const razorpayOrder = await razorpay.orders.create(options);

//         const payment = new Payment({
//             playerId,
//             paymentType: 'razorpay',
//             amount,
//             transactionId: razorpayOrder.id,
//             status: 'pending',
//         });

//         await payment.save();

//         res.json({
//             success: true,
//             orderId: razorpayOrder.id,
//             amount: razorpayOrder.amount,
//             currency: razorpayOrder.currency,
//         });
//     } catch (err) {
//         res.status(500).json({ success: false, message: 'Error creating Razorpay payment', err });
//     }
// };


// const verifyRazorpayPayment = async (req, res) => {
//     const { razorpayPaymentId, razorpayOrderId, razorpaySignature, paymentId } = req.body;

//     try {
//         // Validate Razorpay payment signature
//         const crypto = require('crypto');
//         const generatedSignature = crypto
//             .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
//             .update(razorpayOrderId + '|' + razorpayPaymentId)
//             .digest('hex');

//         if (generatedSignature !== razorpaySignature) {
//             return res.status(400).json({ success: false, message: 'Invalid signature' });
//         }

//         const payment = await Payment.findById(paymentId);

//         if (!payment || payment.paymentType !== 'razorpay') {
//             return res.status(404).json({ success: false, message: 'Razorpay payment not found' });
//         }

//         payment.status = 'completed';
//         payment.razorpayPaymentId = razorpayPaymentId;
//         await payment.save();

//         res.json({ success: true, payment });
//     } catch (err) {
//         res.status(500).json({ success: false, message: 'Error verifying payment', err });
//     }
// };


const getpayment = async (req,res) => {
    console.log(req.body);
    try{
        const pageSize = parseInt(req.query.limit);
        const page = parseInt(req.query.page);
        const search = req.query.search;
        const transactionType = req.query.transactionType;
        const paymentType = req.query.paymentType;

        const query = {
            deleted_at: null,
        };
        if (search) {
            query.amount = { $regex: search, $options: "i" };
        }

        if (paymentType) {
            query.paymentType = paymentType; // e.g., 'manual' or 'razorpay'
        }
    
        if (transactionType) {
            query.transactionType = transactionType; // e.g., 'recharge' or 'withdraw'
        }
        const result = await Transaction.find(query)
            .sort({ createdAt: -1 })
            .skip((page - 1) * pageSize)
            .limit(pageSize);
        const count = await Transaction.find(query).countDocuments();
        res.status(200).json({ success: true, result, count });

    }catch(error){
        res.status(500).json({success:false,message:"error fetching transaction",error :error.message});
     }
}


module.exports = {
    createmanualpayment,
    updatemanualpayment,
    // createRazorpayPayment,
    // verifyRazorpayPayment,
    getpayment,
}