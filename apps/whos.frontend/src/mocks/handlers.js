import { http, HttpResponse } from 'msw';
import users from './data/users.json';
import tenants from './data/tenants.json';
import authData from './data/auth.json';

export const handlers = [
    // Mock GET /api/users to retrieve all users
    http.get('/api/users', () => {
        return HttpResponse.json();
    }),

    // Mock GET /api/tenants to retrieve all tenants
    http.get('/api/tenants', () => {
        return HttpResponse.json();
    }),

    // Mock POST /api/auth/login for authentication
    http.post('/api/auth/login', ({request}) => {
        console.log('Received login request:', request)
        const { email, password } = request;

        // Check if email exists in our mock auth data
        if (authData[email] && password === "password123") { // Assuming "password123" as the mock password
            const { token, role } = authData[email];
            return HttpResponse.json({token, role}, {status: 200});
        }
        return HttpResponse.json({ message: 'Invalid credentials' }, {status: 401});
    }),

    // // Mock GET /api/user/:user_id for fetching individual user data
    // http.get('/api/user/:user_id', () => {
    //     //const { user_id } = req.params;
    //     const user = users.find((u) => u.user_id === user_id);

    //     if (user) {
    //         return HttpResponse.json();
    //     } else {
    //         return HttpResponse.json();
    //     }
    // }),

    // // Mock GET /api/tenant/:tenant_id for fetching individual tenant data
    // http.get('/api/tenant/:tenant_id', () => {
    //     //const { tenant_id } = req.params;
    //     const tenant = tenants.find((t) => t.tenant_id === tenant_id);

    //     if (tenant) {
    //         return HttpResponse.json();
    //     } else {
    //         return HttpResponse.json();
    //     }
    // })
];
