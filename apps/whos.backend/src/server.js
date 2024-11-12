const express = require('express');
const apiRoutes = require('./routes/api');
const tenantMiddleware = require('./middlewares/tenant.middleware');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(tenantMiddleware);
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});