const config = require('config');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const express = require('express');
const userModel = require('../model/user_model');
const router = express.Router();

router.post("/", async function(req, res){
    const { error } = validate(req.body);

    if(error){
        res.status(400).send({
            status : 400,
            message : error.details[0].message
        });
        return;
    }

    user = await userModel.isUserExist(req.body.email)
    if(!user){
        res.status(400).send({
            status : 400,
            message : "Invalid username or password"
        });
        return;
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password)

    if(!validPassword){
        res.status(400).send({
            status : 400,
            message : "Invalid username or password"
        });
        return;
    }

    const token = jwt.sign({_id : user._id}, config.get('jwt_private_key'));

    res.header('x-auth-token', token).send({
        status : 200,
        token : token,
        message : "Successfully validated!"
    });
});

function validate(req){
    // Validation
    const schema = {
        email : Joi.string().min(5).max(255).required().email(),
        password : Joi.string().min(5).max(255).required()
    }

    return Joi.validate(req, schema);
}

module.exports = router;