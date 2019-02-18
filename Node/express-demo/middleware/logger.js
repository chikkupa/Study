function log(req, res, next){
    console.log("In middleware function!");
    next();
}

module.exports = log;