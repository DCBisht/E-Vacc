const Admins = require('../models/Admins');
const Users = require('../models/Users');

const addAdmin = async (req, res, next) => {
  const { adminid, password } = req.body;
  if (!adminid && adminid.trim() === "" && !password && password.trim() === "") {
    return res.status(422).json({ message: "Invalid Inputs" });
  }
  let admin;
  // const hashedPassword = bcrypt.hashSync(password);
  try {
    admin = new Admins({ adminid, password });
    admin = await admin.save();
  } catch (err) {
    return console.log(err);
  }
  if (!admin) {
    return res.status(500).json({ message: "Unable to store admin" });
  }
  return res.status(201).json({ admin });
};

 const checkAdmin= async (req,res)=>{
    const {fullName,password}=req.body;

    const admin=await Users.find({$and:[{fullName:fullName},{password:password}]});

    if(!admin){ return res.status(401).json({error:'Admin Does Not Exists'});}
    console.log("Admin Logged In");
    res.send(req.body.fullName);
}

const getAllUsers = async (req, res) => {
    let users;
    try {
      users = await Users.find();
    } catch (err) {
      return console.log(err);
    }
    if (!users) {
      return res.status(500).json({ message: "Unexpected Error Occured" });
    }
    return res.status(200).json({ users });
  };

 const createUsers= async(req,res)=>{
    try{
        const{name,phNo,dob,age,password}=req.body;
        const user=new Users({
          name,phNo,dob,age,password
        })

        const savedUser=await user.save();
        res.json(savedUser);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send("Some Error Occured");
    }
}

module.exports={addAdmin, checkAdmin, getAllUsers, createUsers };
