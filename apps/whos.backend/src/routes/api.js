const express = require('express');
const userController = require('../controllers/user');
const roleMiddleware = require('../middlewares/role.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const permissionMiddleware = require('../middlewares/permission.middleware');
const router = express.Router();

router.post('/users', userController.registerUser);
router.get('/users/:userAddress', userController.getUser);
// ZKP routes
router.post('/users/generate-proof', userController.generateProof);
router.post('/users/verify-proof', userController.verifyProof);

// Register a new tenant (e.g., organization) and create an initial admin user
router.post('/tenants', tenantController.registerTenant);

// Onboarding for tenant admins (e.g., adding initial configurations or users)
router.post('/tenants/:tenantId/onboard', tenantController.onboardTenant);

// Auth
router.post('/auth/signup', authController.login);

// Auth Middleware
router.use('/users', authMiddleware);
router.use('/users/generate-proof', authMiddleware);
router.use('/users/verify-proof', authMiddleware);

module.exports = router;