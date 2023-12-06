

const express = require('express');
const Users = require('../models/Users');

const router=express.Router();

router.post('/UserLogin',async (req,res)=>{
    console.log(req.body);
    if (req.body === undefined ) {
        // Handle the case where one or both properties are missing
        res.status(400).json({ error: 'phNo and dob are required in the request body' });
      } else {
    const {phNo,dob} = req.body;
    const currUser=await Users.find({$and:[{phNo:{$eq:phNo}},{dob:{$eq:dob}}]});
    if(currUser.length===0){ return res.status(401).json({error:'Invalid User Credentials'});}
    console.log("User Logged In");
    console.log(currUser);
    res.json(currUser);
      }
})


module.exports=router;