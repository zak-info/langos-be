const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  fullname:String,
  email:String,
  phone: String,
  password: String,
  imageUrl:String,
  type:String,
  data:Object,
},
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", groupSchema);
module.exports = User;