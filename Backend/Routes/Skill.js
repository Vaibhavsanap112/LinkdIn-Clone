const express = require("express");
const passport = require("passport");
const Skill = require("../Models/Skill")

const router = express.Router();

router.post("/create",passport.authenticate("jwt",{session:false}),async function(req,res){
  const user = req.user;
  const {skillName}=req.body;
  if(!skillName){
    return res.status(402).json({err:"invalid data"})
  }

  const skillObj = {skillName};
  const createdSkill = await Skill.create(skillObj);

  user.skills.push(createdSkill._id);
  await user.save();
  return res.status(200).json(createdSkill)

})

module.exports = router;