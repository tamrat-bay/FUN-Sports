const express = require('express'),
app = express(),
UFC = require('./mod'),
mongoose = require('mongoose'),
port = process.env.PORT || 8080 ;
app.use(express.json());
//? DB Config 
const db = require('./config/Keys').MongoURI;
//? Connect to mongo
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true }).then(()=>console.log('MongoDB is Conenected ...'))
.catch(err=>console.log(err))

app.get('/ufc/:fighter',(req,res)=>{
    UFC.getFighter(req,res);
});

app.post('/register',(req,res)=>{
    const {name,email,password,password2} = req.body
    console.log(req.body);
    res.sendStatus(201);
})


app.listen(port,()=>console.log(`Server is listening on port ${port}`))