const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
 skillName:{
  type:String,

 },
 

});

module.exports = mongoose.model("skill",skillSchema);