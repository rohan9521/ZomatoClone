import { validate as emailValidator } from "email-validator";
const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: (value: string) => {
      return emailValidator(value);
    },
  },
  address: {
    houseNumber: { type: String },
    area: { type: String },
    locality: String,
    landmark: String,
    pincode: { type: String },
    state: { type: String },
    country: { type: String },
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
