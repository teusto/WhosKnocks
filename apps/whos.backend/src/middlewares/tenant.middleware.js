const jwt = require('jsonwebtoken');

// The tenantMiddleware checks that the tenant_id provided 
// in the JWT matches the requested resource’s tenant_id.
// This middleware ensures data isolation and security between tenants.
// Usage: Apply this middleware to routes that require tenant-specific access, such as /api/tenants/:tenantId/....
const tenantMiddleware = (req, res, next) => {
    const tenantIdInRequest = req.params.tenantId || req.body.tenantId;
    if (!tenantIdInRequest || tenantIdInRequest !== req.user.tenant_id) {
        return res.status(403).json({ message: 'Access denied to this tenant\'s data' });
    }
    next();
};

module.exports = tenantMiddleware;