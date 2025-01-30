const express = require("express");
const app = express();
const {ExtractJwt} = require("passport-jwt");
const JwtStrategy = require("passport-jwt/lib/strategy");

//passport jwt setup

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "thisisaclone";
passport.use(new JwtStrategy(opts,function(jwt_payload,done){
  User.findOne({_id:jwt_payload.identifier},function(err,user){
    if(err){
      done(err,false);
    }
    if(user){
      done(null,user);
    }
    else{
      done(null,false)
    }
  })
}))

app.get("/",function(req,res){
  res.send("I am working");
});

app.get("/login",function(req,res){
res.send("this is another page");
})

app.listen(8000,function(res,req){
  console.log("server running on 8000");
});
