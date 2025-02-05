const express = require("express");

const bcrypt = require('bcryptjs');

const router = express.Router();
const User = require("../Models/User");
const {getToken}= require("../utils/helpers")


router.post("/register",async function(req,res){
  console.log("ragister route is hit")

  const {firstName,email,lastName,password}=req.body;
  console.log(req.body)
 
  if(!firstName || !email || !password){
    return res.status(400).json({err:"Invalid Request Body"});
  }

  const existingUser = await User.findOne({email:email});

  if(existingUser){
    return res.status(402).json({err:"A user With This Email alredy Exists"})
  }


  const hashedPassword = await bcrypt.hash(password,10);
  const newUserDetails = {
    firstName,
    lastName,
    email,
    password:hashedPassword
  }
  const newUser = await User.create(newUserDetails);
  const token = await getToken(email,newUser);
  const userToReturn = {...newUser.toJSON(),token};
  delete userToReturn.password;
  return res.status(200).json(userToReturn);
});

router.post("/login",async function (req,res) {
  const {email,password} = req.body;
  if(!email || !password){
    return res.status(401).json({err:"Invalid Username Or Password"})
  }

  const user = await User.findOne({email:email});
  if(!user){
    return res.status(401).json({err:"Invalid Username Or Password"});
  }

  const idPasswordValid = await bcrypt.compare(password, user.password);
  if(!idPasswordValid){
    return res.status(401).json({err:"Invalid Username or Password"})
  }

  const token = await getToken(email,user);
  const userToReturn = {...user.toJSON(),token};
  delete userToReturn.password;
  return res.status(200).json(userToReturn);

});




module.exports = router;




