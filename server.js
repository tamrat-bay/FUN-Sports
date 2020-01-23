const express = require('express'),
app = express(),
UFC = require('./mod'),
mongoose = require('mongoose'),
port = process.env.PORT || 8080 ;
users = require('./UsersModule');
app.use(express.json());


//? DB Config 
const db = require('./config/Keys').MongoURI;
//? Connect to mongo
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true }).then(()=>console.log('MongoDB is Conenected ...'))
.catch(err=>console.log(err))

app.get('/ufc/:fighter',(req,res)=>{
    UFC.getFighter(req,res);
});


app.get('/post',users.authenticateToken,(req,res)=>{
users.getPost(req,res);
});
//?Register handler
app.post('/users/register',(req,res)=>{
    users.registerHandler(req,res)
});
//?Login Handler
app.post('/users/login',(req,res)=>{
    users.loginHandler(req,res)
});

app.listen(port,()=>console.log(`Server is listening on port ${port}`))