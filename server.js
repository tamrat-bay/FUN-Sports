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

const posts = [{username:'tamrat',title:'tamrat Post'}, {username:'yuval',title:'yuval post'}];

// function getPost(req,res){
//  
// // }
app.get('/post',users.authenticateToken,(req,res)=>{
    // console.log(posts[0].username);
    // console.log(req.user);
    
  return  res.json(posts.filter(post=> post.username === req.user.name))
    // console.log(req.headers);
    //    return res.sendStatus(200);
//   users.getPost(req,res)
});

app.post('/users/register',(req,res)=>{
    // const {name,email,password} = req.body
    // console.log(req.body);
    // res.sendStatus(201);
    users.registerHandler(req,res)
});
app.post('/users/login',(req,res)=>{
    users.loginHandler(req,res)
});

app.listen(port,()=>console.log(`Server is listening on port ${port}`))