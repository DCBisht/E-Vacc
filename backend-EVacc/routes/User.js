const express = require('express');
const { UserLogin , UserSignUp, getAllUsers, getBookingsOfUser, getUserById} = require('../Controllers/User');

const router=express.Router();
router.post('/UserLogin',UserLogin);
router.post('/UserSignUp',UserSignUp);
router.get('/',getAllUsers);
router.get('/:id', getUserById);
router.get("/bookings/:id", getBookingsOfUser);
module.exports= router;