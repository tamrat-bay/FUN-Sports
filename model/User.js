const mongoose = require('mongoose'),
UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:True
    },
    email:{
        type:String,
        required:True
    },
    password:{
        type:String,
        required:True
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const user = mongoose.model('User',UserSchema)

module.exports = user;

