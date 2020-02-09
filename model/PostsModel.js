const mongoose = require('mongoose'),
PostSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    img:{
        type:String
    },
    userImage:{
        type:String
    },
    comments:{
        type:Array
    },
    email:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:new Date().toDateString()
    }
});

const Post = mongoose.model('Post',PostSchema)

module.exports = Post;