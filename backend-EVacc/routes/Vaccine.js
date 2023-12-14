const express = require('express');
const { addNewVaccine, getAllVaccine, getVaccineById } = require('../Controllers/Vaccine');

const router = express.Router();
router.post('/addVaccine',addNewVaccine);
router.get('/',getAllVaccine);
router.get('/:id',getVaccineById);
module.exports = router;