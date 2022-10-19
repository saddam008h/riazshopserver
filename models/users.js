const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      index: { unique: true },
      match: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
    },
    password: {
      type: String,
      required: true,
    },
    userRole: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    userImage: {
      type: String,
      default: "user.png",
    },
    verified: {
      type: String,
      default: false,
    },
    cnic : {
      type:Number
    },
    father:{
      type:String
    },
    address:{
      type:String
    },
    city:{
      type:String
    },
    
    v1name: {
      type: String,
      required: true,
    },
    v1phone: {
      type: Number,
      required: true,
    },
    v1cnic : {
      type:Number
    },
    v1father:{
      type:String
    },
    v1address:{
      type:String
    },
    v1city:{
      type:String
  },
     v2name: {
      type: String,
      required: true,
    },
    v2phone: {
      type: Number,
      required: true,
    },
    v2cnic : {
      type:Number
    },
    v2father:{
      type:String
    },
    v2address:{
      type:String
    },
    v2city:{
      type:String
  },
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
