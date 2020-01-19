const express = require('express'),
app = express(),
UFC = require('./mod'),
mongoose = require('mongoose'),
passport = require('passport'),
port = process.env.PORT || 8080 ;
users = require('./UsersModule');
app.use(express.json());
// const flash = require('connect-flash'),
// session = require('express-session')


// app.use(
//     session({
//       secret: 'secret',
//       resave: true,
//       saveUninitialized: true
//     })
//   );
// // app.use(express.urlencoded({extended:false}));
// app.use(passport.initialize());
// app.use(passport.session());
// // Connect flash
// app.use(flash());
// app.use(function(req, res, next) {
//     res.locals.success_msg = req.flash('success_msg');
//     res.locals.error_msg = req.flash('error_msg');
//     res.locals.error = req.flash('error');
//     next();
//   });
//?Require passport config
// require('./config/passport')(passport)

//? DB Config 
const db = require('./config/Keys').MongoURI;
//? Connect to mongo
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true }).then(()=>console.log('MongoDB is Conenected ...'))
.catch(err=>console.log(err))

app.get('/ufc/:fighter',(req,res)=>{
    UFC.getFighter(req,res);
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