const express = require('express'),
Joi = require('@hapi/joi'),
mongoose = require('mongoose'),
User = require('./model/User'),
passport = require('passport'),
bcrypt = require('bcryptjs');
app = express();
app.use(express.json());

//  

function registerHandler(req,res){
    const {name,email,password} = req.body
    console.log('user handler');
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
        }))
        .then(user=> res.status(201).send('created correctly'))
        .catch(err=>{console.log(err); return res.send(err)})        
    }
    });
    // return res.sendStatus(201);
}

module.exports.loginHandler = function loginHandler(req,res){
    
    const {email,password} = req.body;
    // console.log(req.body,'login');
    
 return   User.findOne({email:email})
    .then(user=>{
        // console.log(user,'this is user then');
        if (!user) {
            return res.status(404).send('That email is not registered')
        }
        // ! Match Passowrd
        bcrypt.compare(password,user.password,(err,isMatch)=>{
            if(err) throw err;
            
            if(isMatch){
                return res.status(200).send(user)
            }else{
                return res.status(400).send('Incorrect Password')
            }
        })
    })
    .catch(err=>{console.log(err);res.status(404).send(err)})
}

function userValidation(newUserObj){
    let schema = Joi.object({
        name: Joi.string().min(2).max(15).alphanum().required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{5,30}$')),
        confirmPassword: Joi.ref('password'),
    })
    return schema.validate(newUserObj);
}


module.exports.registerHandler = registerHandler;