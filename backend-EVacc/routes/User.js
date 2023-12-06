const express = require('express');
const { UserLogin } = require('../Controllers/User');

const router=express.Router();
router.post('/UserLogin',UserLogin);

module.exports= router;