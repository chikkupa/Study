function admin(req, res, next) {
    if(!req.user.isAdmin){
        res.status(401).send({
            status : 401,
            message : "Unautorised access"
        });
        return;
    }

    next();
}

module.exports = admin;