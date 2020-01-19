const LocalStrategy = require('passport-local').Strategy,
mongoose = require('mongoose'),
User = require('../model/User'),
bcrypt = require('bcryptjs');
// app.use(passport.initialize());
// app.use(passport.session());


module.exports.login = function login(passport){
      passport.use(
       new LocalStrategy({usernameField: 'email'}, (email,password,done)=>{
       //! Check the user, see if we have it in the DB
       User.findOne({email:email})
        .then(user=>{
            if (!user) {
                return done(null,false,{message:'That email is not registered'})
            }
            // ! Match Passowrd
            bcrypt.compare(password,user.password,(err,isMatch)=>{
                if(err) throw err;
                
                if(isMatch){
                    return done(null,user)
                }else{
                    return done(null,false,{message:'Incorrect Password'})
                }
            })
        })
       })
      );
      passport.serializeUser((user, done)=> {
        done(null, user.id);
      });
      
      passport.deserializeUser((id, done)=> {
        User.findById(id, (err, user)=> {
          done(err, user);
        });
      });
}






