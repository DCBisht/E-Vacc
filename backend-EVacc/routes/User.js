const express = require('express');
const { UserLogin , UserSignUp} = require('../Controllers/User');

const router=express.Router();
router.post('/UserLogin',UserLogin);
router.post('/UserSignUp',UserSignUp);

module.exports= router;