
const _ = require('lodash')
const bcrypt = require('bcrypt')
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

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = await userModel.registerUser(req.body.name, req.body.email, hashedPassword);
    
    res.send(_.pick(user, ['_id', 'name', 'email']));
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