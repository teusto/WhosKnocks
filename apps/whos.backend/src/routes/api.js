const express = require('express');
const userController = require('../controllers/user');
const router = express.Router();

router.post('/api/user', userController.registerUser);
router.get('/api/user/:userAddress', userController.getUser);
// ZKP routes
router.post('/api/user/generate-proof', userController.generateProof);
router.post('/api/user/verify-proof', userController.verifyProof);

// Register a new tenant (e.g., organization) and create an initial admin user
router.post('/api/tenants', tenantController.registerTenant);

// Onboarding for tenant admins (e.g., adding initial configurations or users)
router.post('/api/tenants/:tenantId/onboard', tenantController.onboardTenant);

module.exports = router;