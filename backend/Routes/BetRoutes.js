const {  insertbet,
    updatebet,
    getAllbet,
    getSinglebet,
    deletebet} = require('../Controllers/BetController');
const express = require('express');
const router = express.Router();

router.post('/insertbet',insertbet);
router.put('/updatebet',updatebet,);
router.get('/getAllbet',getAllbet);
router.post('/getSinglebet',getSinglebet);
router.delete('/deletebet',deletebet);

module.exports=router;
