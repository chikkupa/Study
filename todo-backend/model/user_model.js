const config = require("config");
const mongoose = require("mongoose");

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
    }
});

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
    const result = await User.find({email : email})
                            .select({name : 1});
    if(result.length == 0)
        return false;

    return true;
}

module.exports.registerUser = registerUser;
module.exports.isUserExist = isUserExist;