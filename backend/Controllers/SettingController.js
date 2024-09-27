const Setting = require('../Models/Setting');
const updatesetting = async(req,res)=>{
   try {
         const result = await Setting.updateOne({ $set: req.body }); // Update the first document found
        if (!result) {
            return res.status(404).json({ success: false, message: "No changes made to the setting." });
        }

        res.status(200).json({ success: true, result: result });
    } catch (err) {
        res.status(500).json({ success: false, message: "Error in updating the setting", error: err.message });
    }
  }

module.exports= {
    updatesetting,  
  
}