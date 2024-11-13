const express = require('express');
const apiRoutes = require('./routes/api');
const errorHandler = require('./middlewares/error.middleware');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', apiRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});