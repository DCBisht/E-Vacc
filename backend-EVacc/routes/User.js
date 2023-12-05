

const express = require('express');
const Users = require('../models/Users');

const router=express.Router();

router.post('/UserLogin',async (req,res)=>{
    const {phNo,dob}=req.body;

    const currUser=await Users.find({$and:[{phNo:{$eq:phNo}},{dob:{$eq:dob}}]});
    if(currUser.length===0){ return res.status(401).json({error:'Invalid User Credentials'});}
    console.log("User Logged In");
    console.log(currUser);
    res.json(currUser);
})


module.exports=router;