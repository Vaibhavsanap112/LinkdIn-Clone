const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  Name:{
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