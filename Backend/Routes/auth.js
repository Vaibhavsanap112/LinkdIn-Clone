const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();


router.post("/register",async function(req,res){
  const {firstName,email,lastName,password}=req.body;
  if(!firstName || !email || !password){
    return res.status(400).json({err:"Invalid Request Body"});
  }

  const existingUser = await UserActivation.findOne({email:email});

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
  const userToReturn = {...newUser.toJson(),token};
  delete userToReturn.password;
  return res.status(200).json(userToReturn);
});

