const { updatesetting, getsetting } = require('../Controllers/SettingController');
const express = require('express')
const router = express.Router();

router.put('/updatesetting',updatesetting);
router.get('/getAllSetting',getsetting);

module.exports =router;