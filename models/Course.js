const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  idUser: mongoose.Schema.Types.ObjectId,
  category:String,
  module:String,
  title: String,
  description: String,
  url: String,
  filePath: String,
  data:Object,
},
  {
    timestamps: true,
  }
);
const Course = mongoose.model("Course", groupSchema);
module.exports = Course;