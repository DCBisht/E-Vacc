const express = require('express');
const { addNewVaccine } = require('../Controllers/Vaccine');


const router = express.Router();
router.post('/addVaccine',addNewVaccine);
module.exports = router;