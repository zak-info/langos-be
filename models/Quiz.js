const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  idUser: mongoose.Schema.Types.ObjectId,
  category:String,
  module:String,
  title: String,
  description: String,
  data:Object,
},
  {
    timestamps: true,
  }
);
const Quiz = mongoose.model("Quiz", groupSchema);
module.exports = Quiz;