import { rest } from 'msw';
import users from './mockData/users.json';
import tenants from './mockData/tenants.json';
import authData from './mockData/auth.json';

export const handlers = [
    // Mock GET /api/users to retrieve all users
    rest.get('/api/users', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(users));
    }),

    // Mock GET /api/tenants to retrieve all tenants
    rest.get('/api/tenants', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(tenants));
    }),

    // Mock POST /api/auth/login for authentication
    rest.post('/api/auth/login', (req, res, ctx) => {
        const { email, password } = req.body;

        // Check if email exists in our mock auth data
        if (authData[email] && password === "password123") { // Assuming "password123" as the mock password
            const { token, role } = authData[email];
            return res(
                ctx.status(200),
                ctx.json({ token, role })
            );
        }
        return res(ctx.status(401), ctx.json({ message: 'Invalid credentials' }));
    }),

    // Mock GET /api/user/:user_id for fetching individual user data
    rest.get('/api/user/:user_id', (req, res, ctx) => {
        const { user_id } = req.params;
        const user = users.find((u) => u.user_id === user_id);

        if (user) {
            return res(ctx.status(200), ctx.json(user));
        } else {
            return res(ctx.status(404), ctx.json({ message: 'User not found' }));
        }
    }),

    // Mock GET /api/tenant/:tenant_id for fetching individual tenant data
    rest.get('/api/tenant/:tenant_id', (req, res, ctx) => {
        const { tenant_id } = req.params;
        const tenant = tenants.find((t) => t.tenant_id === tenant_id);

        if (tenant) {
            return res(ctx.status(200), ctx.json(tenant));
        } else {
            return res(ctx.status(404), ctx.json({ message: 'Tenant not found' }));
        }
    })
];
