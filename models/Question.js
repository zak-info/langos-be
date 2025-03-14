const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  idUser: mongoose.Schema.Types.ObjectId,
  idQuiz: mongoose.Schema.Types.ObjectId,
  text: String,
  points: Number,
  choices:[Object],
  data:Object,
},
  {
    timestamps: true,
  }
);
const Question = mongoose.model("Question", groupSchema);
module.exports = Question;