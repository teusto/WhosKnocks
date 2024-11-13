const express = require('express');
const userController = require('../controllers/user');
const roleMiddleware = require('../middlewares/role.middleware');
const authMiddleware = require('../middlewares/auth.middleware');
const permissionMiddleware = require('../middlewares/permission.middleware');
const router = express.Router();

router.post('/api/users', userController.registerUser);
router.get('/api/users/:userAddress', userController.getUser);
// ZKP routes
router.post('/api/users/generate-proof', userController.generateProof);
router.post('/api/users/verify-proof', userController.verifyProof);

// Register a new tenant (e.g., organization) and create an initial admin user
router.post('/api/tenants', tenantController.registerTenant);

// Onboarding for tenant admins (e.g., adding initial configurations or users)
router.post('/api/tenants/:tenantId/onboard', tenantController.onboardTenant);

// Auth
router.post('/api/auth/login', authController.login);

// Auth Middleware
router.use('/api/users', authMiddleware);
router.use('/api/users/generate-proof', authMiddleware);
router.use('/api/users/verify-proof', authMiddleware);

module.exports = router;