const mongoose= require('mongoose');

const paymentSchema = new mongoose.Schema({
    playerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
        required: true,
    },
    paymentType: {
        type: String,
        enum: ['manual', 'razorpay'], // Payment types
        required: true,
    },
    transactionType: {
        type: String,
        enum: ['recharge', 'withdraw'], // Transaction types
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    bankDetailsId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'bankdetails', // Reference to bank details
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected', 'completed'],
        default: 'pending',
    },
    transactionId: {
        type: String, // For Razorpay or manual reference
    },
    razorpayPaymentId: {
        type: String, // Only for Razorpay payments
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Payment', paymentSchema);
