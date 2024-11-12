const db = require('../db'); // Database connection
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Register a new tenant and create an initial admin user
exports.registerTenant = async (req, res) => {
    const { tenant_name, admin_email, admin_password } = req.body;

    try {
        // Create tenant entry
        const tenant = await db.query(
            'INSERT INTO tenants (tenant_name) VALUES ($1) RETURNING tenant_id',
            [tenant_name]
        );

        // Create admin user for this tenant
        const hashedPassword = await bcrypt.hash(admin_password, 10);
        const adminUser = await db.query(
            'INSERT INTO users (email, password, role, tenant_id) VALUES ($1, $2, $3, $4) RETURNING user_id',
            [admin_email, hashedPassword, 'admin', tenant.rows[0].tenant_id]
        );

        // Generate JWT for tenant admin
        const token = jwt.sign(
            { user_id: adminUser.rows[0].user_id, tenant_id: tenant.rows[0].tenant_id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ message: 'Tenant registered successfully', token });
    } catch (error) {
        res.status(500).json({ message: 'Error registering tenant', error });
    }
};

// Onboard a tenant (e.g., initial user setup, configurations)
exports.onboardTenant = async (req, res) => {
    const { tenantId } = req.params;
    const { initial_users } = req.body; // Array of initial users

    try {
        for (const user of initial_users) {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            await db.query(
                'INSERT INTO users (email, password, role, tenant_id) VALUES ($1, $2, $3, $4)',
                [user.email, hashedPassword, user.role, tenantId]
            );
        }

        res.json({ message: 'Tenant onboarding completed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error during tenant onboarding', error });
    }
};
