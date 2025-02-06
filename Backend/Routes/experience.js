const express = require("express");
const passport = require("passport");
const Experinces = require("../Models/Experinces");
const router = express.Router();

router.post("/create", passport.authenticate("jwt",{session:false}),async function(req,res){
  //identify the user who..2.crate the experience object...3.

  const user = req.user;

  const {companyName,position,startDate,ebdDate,description} = req.body;

  if(!companyName || !position){
    return res.status(402).json({err:"invalid data"})
  }
  const experienceObj = {companyName,position,startDate,ebdDate,description}
  const experience = await Experinces.create(experienceObj);

  user.experiences.push(experience._id);
  await user.save();

  return res.status(200).json(experience)
})

module.exports = router;