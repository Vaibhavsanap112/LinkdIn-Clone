const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:false
  },
  links:[{
    type:String,
  }]

});

module.exports = mongoose.model("project",projectSchema);