// Usage: Apply this middleware at the end of all route declarations 
// in your main app.js file to catch any errors not handled explicitly in route handlers.
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
        details: err.details || null
    });
};

module.exports = errorHandler;