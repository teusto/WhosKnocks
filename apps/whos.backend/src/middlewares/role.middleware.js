const db = require('../db');

// The roleMiddleware checks if the user has the required role to access a particular route.
// Use this middleware to protect routes that require specific roles (e.g., admin role).
const roleMiddleware = (requiredRole) => {
    return async (req, res, next) => {
        const { role, tenant_id } = req.user;

        try {
            // Check if the user's role matches the required role
            const roleResult = await db.query(
                'SELECT role_name FROM roles WHERE role_name = $1 AND tenant_id = $2',
                [role, tenant_id]
            );

            if (roleResult.rows.length === 0 || role !== requiredRole) {
                return res.status(403).json({ message: 'Access denied' });
            }

            next();
        } catch (error) {
            console.error('Error checking user role:', error);
            res.status(500).json({ message: 'Error checking user role' });
        }
    };
};

module.exports = roleMiddleware;