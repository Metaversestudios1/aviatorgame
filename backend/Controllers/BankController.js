const Bank = require('../Models/BankDetail');
const updatebankdetails = async(req,res)=>{
   try {
         const result = await Bank.updateOne({ $set: req.body }); // Update the first document found
        if (!result) {
            return res.status(404).json({ success: false, message: "No changes made to the bank details." });
        }
        res.status(200).json({ success: true, result: result });
    } catch (err) {
        res.status(500).json({ success: false, message: "Error in updating the bank details", error: err.message });
    }
  }

  const getbankdetails = async(req,res)=>{
    try {
          const result = await Bank.find(); // Update the first document found
         if (!result) {
             return res.status(404).json({ success: false, message: "bank detail not found" });
         } 
         res.status(200).json({ success: true, result: result });
     } catch (err) {
         res.status(500).json({ success: false, message: "Error fetching bank details", error: err.message });
     }
   }

module.exports= {
    updatebankdetails,  
    getbankdetails
  
}