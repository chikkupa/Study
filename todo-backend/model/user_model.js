const config = require("config");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

mongoose.connect(config.get('mongo_connection'))
    .catch(err => console.log('Unable to connect to MongoDB'));

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true,
        minlength : 5,
        maxlength : 50
    },
    email : { 
        type : String, 
        required : true,
        minlength : 5,
        maxlength : 255,
        unique : true 
    },
    password : {
        type : String,
        required : true,
        minlength : 5,
        maxlength : 1024
    },
    isAdmin : Boolean
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id : this._id, isAdmin : this.isAdmin }, config.get('jwt_private_key'));
    return token;
}

const User = mongoose.model('User', userSchema);

// Registering a user
async function registerUser(name, email, password) {
    const user = new User({
        name : name,
        email : email,
        password : password
    });

    const result = await user.save();
    return result;
}

// To get details of a user
async function isUserExist(email){
    const result = await User.find({email : email});
    if(result.length == 0)
        return false;

    return result[0];
}

async function getUserDetails(id){
    const result = await User.findById(id).select("-password");
    return result;
}

module.exports.registerUser = registerUser;
module.exports.isUserExist = isUserExist;
module.exports.getUserDetails = getUserDetails;