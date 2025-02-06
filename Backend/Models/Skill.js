const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
 skillName:{
  type:String,
  required:true

 },
 

});

module.exports = mongoose.model("skill",skillSchema);