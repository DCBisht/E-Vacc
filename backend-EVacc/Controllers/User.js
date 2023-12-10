const Users = require('../models/Users');

const UserLogin = async (req,res)=>{
    // console.log(req.body);
    if (req.body === undefined ) {
        // Handle the case where one or both properties are missing
        res.status(400).json({ error: 'phNo and dob are required in the request body' });
    }
    else {
    const {phNo,dob} = req.body;
    const currUser=await Users.find({$and:[{phNo:{$eq:phNo}},{dob:{$eq:dob}}]});
    if(currUser.length===0){ return res.status(401).json({error:'Invalid User Credentials'});}
    console.log("User Logged In");
    console.log(currUser);
    res.json(currUser);
      }
};

const UserSignUp = async (req,res)=>{
  if(req.body === undefined){
    res.status(401).json( {error: 'Request body is undefined' });
  }
  // console.log(req.body);
  try {
    // Create a new user using the User model
      const newUser = new Users({
      name: req.body.name,
      phNo: req.body.phNo,
      dob: req.body.dob,
      age: req.body.age,// Assuming you provide an array of vaccines in the request body
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports={UserLogin,UserSignUp};