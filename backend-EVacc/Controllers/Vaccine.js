const Vaccine = require('../models/Vaccine');
const addNewVaccine = async(req, res)=>{
    try{
        const {name,manufacturer,image,description,availableQuantity,hospitals} = req.body;
        console.log(req.body);
        if (!name || !description) {
            return res.status(400).json({ error: 'Name and Manufacturer are required fields' });
        }
        // const newVaccine= new Vaccine({name,manufacturer,image,description,availableQuantity,hospitals});
        // await newVaccine.save();
        res.status(201).json({pass:"Passed"});
    }
    catch(error){
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports ={addNewVaccine};