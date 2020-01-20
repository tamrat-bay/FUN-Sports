require('dotenv').config()

const express = require('express'),
Joi = require('@hapi/joi'),
mongoose = require('mongoose'),
User = require('./model/User'),
jwt = require('jsonwebtoken'),
bcrypt = require('bcryptjs');
app = express();
app.use(express.json());


function registerHandler(req,res){
    const {name,email,password} = req.body
    // console.log(req.body,'user handler');
    let {error} = userValidation(req.body)
    // if not send error and status 400    
    if (error) return res.status(400).send(error.details[0].message);
    //?Validation Passed
    User.findOne({email:email})
    .then(user=>{
        if(user){
        //!User exists send err
    res.status(400).send('User already exists')
    }else{
        const newUser = new User({
            name,
            email,
            password
        });
        //todo Hash Password
        bcrypt.genSalt(10,(err,salt)=>
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
        if(err) throw err;
        //? Set passwoed to has
        newUser.password = hash;
        //! Save User
        newUser.save()
        .then(newUser=>res.status(201).send(newUser))
        .catch(err=> res.status(500).send(err))
        // return res.status(201).send(newUser);
        }))     
    }
    });
}

function loginHandler(req,res){
    //!Authenticate user
    const {email,password} = req.body;
    // console.log(req.body,'login');
    
    User.findOne({email:email})
      .then(user=>{
        // console.log(user,'this is user then');
        if (!user) {
            return res.status(404).send('That email is not registered')
        }
        //! Match Passowrd
        bcrypt.compare(password,user.password,(err,isMatch)=>{
            if(err) throw err;      
            if(isMatch){
              const accessToken =  jwt.sign(user.name,process.env.ACCESS_TOKEN_SECRET)
              const response = {name:user.name, token : accessToken}
              return res.status(200).send(response)
            }else{
                return res.status(400).send('Incorrect Password')
            }
        })
    })
    .catch(err=>{console.log(err);res.status(404).send(err)})
    
}
const post = [{username:'tamrat',title:'tamrat Post'}, {username:'yuval',title:'yuval'}]
// function getPost(req,res, authenticateToken){
//  res.json(post.fillter(post=> post.username === req.user.name))
// }

function userValidation(newUserObj){
    let schema = Joi.object({
        name: Joi.string().min(2).max(15).alphanum().required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{4,30}$')),
        confirmPassword: Joi.ref('password'),
    })
    return schema.validate(newUserObj);
}

function authenticateToken(req,res,next){
//!get the token
const authHeader = req.headers['authorization'];
const token = authHeader && authHeader.split(' ')[1];
// Bearer Token
//!Verify the correct user
if (token == null) return res.status(401).send('No token was send')
jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
    if (err) return res.status(403).send('token is not valid');
    //? here we have verify USER
    req.user = user;
    next();
})
//! return the user
}

module.exports.authenticateToken = authenticateToken;
module.exports.registerHandler = registerHandler;
module.exports.loginHandler = loginHandler;
// module.exports.getPost = getPost;