const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  idUser: mongoose.Schema.Types.ObjectId,
  idQuiz: mongoose.Schema.Types.ObjectId,
  idQuestion: mongoose.Schema.Types.ObjectId,
  text: String,
  isCorrect: Boolean,
  data: Object,
},
  {
    timestamps: true,
  }
);
const Choice = mongoose.model("Choice", groupSchema);
module.exports = Choice;