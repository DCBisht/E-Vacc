const Vaccine = require('../models/Vaccine');
const addNewVaccine = async(req, res)=>{
    try{
        const {name,when_to_give,dose,description,route,site} = req.body;
        console.log(req.body);
        if (!name || !description) {
            return res.status(400).json({ error: 'Name and Manufacturer are required fields' });
        }
        const newVaccine= new Vaccine({name,when_to_give,dose,description,route,site});
        await newVaccine.save();
        res.status(201).json({pass:"Passed"});
    }
    catch(error){
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
const getAllVaccine = async(req,res)=>{
    let vaccine;

  try {
    vaccine = await Vaccine.find();
  } catch (err) {
    return console.log(err);
  }

  if (!vaccine) {
    return res.status(500).json({ message: "Request Failed" });
  }
  return res.status(200).json({ vaccine});
};

const getVaccineById = async (req, res, next) => {
    const id = req.params.id;
    let vaccine;
    try {
        vaccine = await Vaccine.findById(id);
    } catch (err) {
      return console.log(err+"Hello Divya");
    }
  
    if (!vaccine) {
      return res.status(404).json({ message: "Invalid Movie ID" });
    }
  
    return res.status(200).json({ vaccine });
};
module.exports ={addNewVaccine,getAllVaccine,getVaccineById};