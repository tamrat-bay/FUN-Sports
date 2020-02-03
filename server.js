const express = require('express'),
app = express(),
UFC = require('./mod'),
mongoose = require('mongoose'),
port = process.env.PORT || 8080 ;
users = require('./UsersModule');
app.use(express.json());
const PostsHandler = require('./PostsHandler')
const axios = require('axios').default;

// // axios.get('https://www.scorebat.com/video-api/v1/')
// // .then((res)=> {
//? DB Config 
const db = require('./config/Keys').MongoURI;
//? Connect to mongo
mongoose.connect(db,{useNewUrlParser:true, useUnifiedTopology:true,useFindAndModify:false }).then(()=>console.log('MongoDB is Conenected...'))
.catch(err=>console.log(err))

// //  console.log(res.data);

// //   })
// //   .catch((error)=> {
// //       console.log(error);
// //   });

//    let OldFootballGamesSchema = new mongoose.Schema({
//         date:String,
//         data:Array,
//     });
//     let OldFootBallGames = mongoose.model("OldFootBallGames",OldFootballGamesSchema)


// if(new Date().getHours() === 18){

// axios.get('https://www.scorebat.com/video-api/v1/')
// .then((res)=> {

//   let a =  OldFootBallGames.findOne((err,res)=>{
//       if (err) {
//           console.log(err);        
//       }else{
//           console.log(res,'this is res');
//       }
//   })
//   console.log(a,'this is a');
  
//     // mongoose.connection.db.dropCollection('oldfootballgames', (err, result)=>
//     //  {if (err) {console.log(err);}
//     // else{
//     //     console.log(result);
        
//     // }})
        
  

// //!Add Games to db
//      const oldGame = new OldFootBallGames({
//           date:new Date().toDateString(),
//           data:res.data
//     });
//     // oldGame.save()
//     // .then(o=>console.log('games saved in db'))
//     // .catch(err=> console.log(err))
//   })

//   .catch((error)=> {
//       console.log(error);
//   });
// }
// console.log(new Date().toDateString().split(" "));
// console.log(new Date().getHours() === 15);




app.get('/ufc/:fighter',(req,res)=>{
    UFC.getFighter(req,res);
});

//?Register handler
app.post('/users/register',(req,res)=>{
    users.registerHandler(req,res)
});
//?Login Handler
app.post('/users/login',(req,res)=>{
    users.loginHandler(req,res)
});

//! GET POSTS
app.get('/posts',users.authenticateToken,(req,res)=>{  
    PostsHandler.getPosts(req,res);
});
//! Post to POSTS
app.post('/posts',users.authenticateToken,(req,res)=>{  
    PostsHandler.addPost(req,res);
});
//! Update  POSTS
app.put('/posts/:id',users.authenticateToken,(req,res)=>{  
    PostsHandler.updatePost(req,res);
});
//! Delete POSTS
app.delete('/posts/:id',users.authenticateToken,(req,res)=>{  
    PostsHandler.deletePost(req,res);
});

app.listen(port,()=>console.log(`Server is listening on port ${port}`))