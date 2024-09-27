const mongoose = require('mongoose');

const bankSchma = new mongoose.Schema(
    {
        bankName: { type: String,  },
        accountNo: { type: String,  },
        accountholderhame: { type: String,  },
        ifscCode: { type: String,  },
        mobileNo: { type: String,  },
        upiId: { type: String,  },
        browseCode: { publicId: { type: String },
        url: { type: String },
        originalname: { type: String },
        mimetype: { type: String },  }
    },{
        timestamps:true,collection:'bankdetails'
    }
)

module.exports = mongoose.model('Bank',bankSchma);