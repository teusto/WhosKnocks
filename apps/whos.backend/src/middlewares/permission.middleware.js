const db = require('../db');

// If your app has finer-grained permissions beyond roles, use permissionMiddleware 
// to check whether the user’s role has the necessary permission for the requested action.
// Usage: Use this middleware to secure actions that require specific permissions (e.g., "manage_users").
const permissionMiddleware = (requiredPermission) => {
    return async (req, res, next) => {
        const { role, tenant_id } = req.user;

        try {
            // Check if the user's role has the required permission
            const permissionResult = await db.query(
                `SELECT rp.permission_id FROM role_permissions rp
                 JOIN permissions p ON rp.permission_id = p.permission_id
                 JOIN roles r ON rp.role_id = r.role_id
                 WHERE r.role_name = $1 AND rp.tenant_id = $2 AND p.permission_name = $3`,
                [role, tenant_id, requiredPermission]
            );

            if (permissionResult.rows.length === 0) {
                return res.status(403).json({ message: 'Permission denied' });
            }

            next();
        } catch (error) {
            console.error('Error checking user permissions:', error);
            res.status(500).json({ message: 'Error checking user permissions' });
        }
    };
};

module.exports = permissionMiddleware;
