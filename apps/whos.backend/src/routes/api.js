const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();

router.post('/user', userController.registerUser);
router.get('/user/:userAddress', userController.getUser);
// ZKP routes
router.post('/user/generate-proof', userController.generateProof);
router.post('/user/verify-proof', userController.verifyProof);

module.exports = router;