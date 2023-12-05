const express=require('express');
const Admins=require('../models/Admins');
const Users = require('../models/Users');
const router=express.Router();


router.post('/SignUp',async (req,res)=>{
    console.log(req.body);
    const admin=Admins(req.body);
    const response=await admin.save();
    res.send(req.body);
})

router.post('/Login',async (req,res)=>{
    const {fullName,password}=req.body;

    const admin=await Users.find({$and:[{fullName:fullName},{password:password}]});

    if(!admin){ return res.status(401).json({error:'Admin Does Not Exists'});}
    console.log("Admin Logged In");
    res.send(req.body.fullName);
})

router.get('/getAllUsers',async (req,res)=>{
    const users=await Users.find();

    if(!user){
        return res.status(401).json({error:'Invalid Date of Birth of Password'});
    }
    console.log(users);
    res.json(users);
})

router.post('/createUsers',async(req,res)=>{
    try{
        const{firstName,lastName,phNo,dob,age}=req.body;
        const user=new Users({
            firstName,lastName,phNo,dob,age
        })

        const savedUser=await user.save();
        res.json(savedUser);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send("Some Error Occured");
    }
})

module.exports=router;