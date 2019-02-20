const Joi = require('joi');
const express = require('express');
const userModel = require('../model/user_model');
const router = express.Router();

router.post("/", async function(req, res){
    const { error } = validateUser(req.body);

    if(error){
        res.status(400).send({
            status : 400,
            message : error.details[0].message
        });
        return;
    }

    if(await userModel.isUserExist(req.body.email)){
        res.status(400).send({
            status : 400,
            message : "User already registered!"
        });
        return;
    }

    const user = await userModel.registerUser(req.body.name, req.body.email, req.body.password);
    res.send(user);
});

function validateUser(user){
    // Validation
    const schema = {
        name : Joi.string().min(5).max(50).required(),
        email : Joi.string().min(5).max(255).required().email(),
        password : Joi.string().min(5).max(255).required()
    }

    return Joi.validate(user, schema);
}

module.exports = router;