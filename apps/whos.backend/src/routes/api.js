const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();

router.post('/user', userController.registerUser);
router.get('/user/:userAddress', userController.getUser);

module.exports = router;