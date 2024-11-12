const jwt = require('jsonwebtoken');

const tenantMiddleware = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.tenant_id = decoded.tenant_id;
    next();
};

module.exports = tenantMiddleware;