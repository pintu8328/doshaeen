const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,

  },
  age:{
    type:Number,
    required:true
  },
  father:{
    type:String,
    required:true
  },
  adress:{
    type:String,
    required:true
  },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    trim: true,
  },
  pan: {
    type: String,
    required: true,
    unique: true,
  },
  aadhar: {
    type: String,
    required: true,
    unique: true,
  },
  passport: {
    type: String,
    required: true,
    unique: true,
  },
});

const UserModel = mongoose.model("Kyc", UserSchema);

module.exports = UserModel;
