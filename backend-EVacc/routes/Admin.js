const express = require('express');
const { addAdmin, checkAdmin, getAllUsers, createUsers } = require('../Controllers/Admin');

const router = express.Router();

router.post('/SignUp',addAdmin);
router.post('/Login',checkAdmin);
router.get('/getAllUsers',getAllUsers);
router.post('/createUsers',createUsers);

module.exports = router;