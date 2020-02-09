const express = require('express'),
Joi = require('@hapi/joi'),
mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Post = require('./model/PostsModel'),
app = express();
app.use(express.json());

function getPosts(req,res){
    //!Verify the correct user
jwt.verify(req.token,'secretkey',(err,authData)=>{
    
    if (err){ return res.status(403).send('token is not valid')}
    else{
       Post.find({})
       .then(data=> res.status(200).send(data))
       .catch(err => {console.log(err);res.status(500).send(err)})
    }
})
}

function addPost(req,res){ 
    //!Verify the correct user
    const {name,subject,content,email,img,userImage,comments} = req.body;
    console.log(req.body,'Post Data');
   jwt.verify(req.token,'secretkey',(err,authData)=>{    
    if (err){ return res.status(403).send('token is not valid')}
    else{
        const newPost = new Post({
            name,
            subject,
            content,
            email,
            img,
            userImage,
            comments
        });
        return newPost.save()
        .then((post)=>{console.log(post,'new post added'); res.status(201).send(post)})
        .catch(err=> console.log(err))
    }
})
}
function updatePost(req,res){
    //!Verify the correct user
    const id = req.params.id 
    console.log(req.body,'update body');
    
   jwt.verify(req.token,'secretkey',(err,authData)=>{
    if (err){ return res.status(403).send('token is not valid')}
    else{
      return  Post.findByIdAndUpdate(id,req.body,{new:true})
        .then(data=> {res.status(200).send(data); console.log(data,'db data');
        })
        .catch(err=> console.log(err))
    }
})
}

function deletePost(req,res){
    //!Verify the correct user
    const id = req.params.id  
   jwt.verify(req.token,'secretkey',(err,authData)=>{
    if (err){ return res.status(403).send('token is not valid')}
    else{
      return  Post.findByIdAndDelete(id,{})
        .then(data=> res.status(200).send('deleted'))
        .catch(err=> console.log(err))
    }
})
}

module.exports.getPosts = getPosts;
module.exports.addPost = addPost;
module.exports.updatePost = updatePost;
module.exports.deletePost = deletePost;