import { validate as emailValidator } from "email-validator";
const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    houseNumber: { type: String, required: true },
    area: { type: String, required: true },
    locality: String,
    landmark: String,
    pincode: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    required:false
  },
  password: { type: String, required: true },
  mobileNumber: { type: String, required: true, unique: true },
  profilePic: String,
  orderIdList: [{ type: String }],
});

// userSchema.pre('save',async function(user:{password:string}){
//   let saltRounds = 10
// await bcrypt.hash(user.password, saltRounds, (hash:string,err:string)=> {
//   // Store hash in your password DB.
//   console.log(hash)
// });
//   });
  

const userModel = mongoose.model("Users", userSchema);

export = userModel;
