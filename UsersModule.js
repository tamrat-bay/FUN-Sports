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
            jwt.sign({user},'secretkey',{expiresIn: '20h'},(err,token)=>{
                const responseData = {name:user.name, id: user.id, token : token}
                res.status(200).send(responseData);
            })
            }else{
                return res.status(400).send('Incorrect Password')
            }
        })
    })
    .catch(err=>{console.log(err);res.status(404).send(err)})
    
}
// const post = [{username:'tamrat',title:'tamrat Post'}, {username:'yuval',title:'yuval'}]

function getPost(req,res,){
    //!Verify the correct user
    console.log(req.token,'res tok');
jwt.verify(req.token,'secretkey',(err,authData)=>{
    console.log(authData,'authdata');
    
    if (err){ return res.status(403).send('token is not valid')}
    else{
        return  res.json(post.filter(p=>p.username === authData.user.name))
    }
})
}

function getPost(req,res,){
    //!Verify the correct user
    console.log(req.token,'res tok');
jwt.verify(req.token,'secretkey',(err,authData)=>{
    console.log(authData,'authdata');
    
    if (err){ return res.status(403).send('token is not valid')}
    else{
        return  res.json(post.filter(p=>p.username === authData.user.name))
    }
})
}

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
req.token = token;
next()
}

module.exports.authenticateToken = authenticateToken;
module.exports.registerHandler = registerHandler;
module.exports.loginHandler = loginHandler;
module.exports.getPost = getPost;