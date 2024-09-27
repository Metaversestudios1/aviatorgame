const { updatesetting } = require('../Controllers/SettingController');
const express = require('express')
const router = express.Router();

router.put('/updatesetting',updatesetting);

module.exports =router;