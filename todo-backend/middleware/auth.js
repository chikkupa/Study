const jwt = require('jsonwebtoken');
const config = require('config');

function auth(req, res, next) {
    const token = req.header('x-auth-token');
    if(!token){
        res.status(401).send({
            status : 401,
            message : "Access denied. No token provided."
        });
        return;
    }
    try{
        const decoded = jwt.verify(token, config.get('jwt_private_key'));
        req.user = decoded;
        next(); 1
    } catch (exception){
        res.status(400).send({
            status : 400,
            message : "Invalid Token"
        });
    }
}

module.exports = auth;