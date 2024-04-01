import express from 'express'
const {dbConnect} = require('./src/database/Database')
const dotenv = require("dotenv");
const userModel = require('./src/models/User')
const app = express()



dotenv.config();
const router = express.Router();



console.log({userModel})
const createUser =async ()=>{
    let user = {
      name: "ROhan",
      email: "rohan12@gmail.com",
      password: "test_123",
      address: {
        houseNumber: "1",
        area: "RJ",
        locality: "First Street",
        landmark: "PO",
        pincode: "110031",
        state: "Delhi",
        country: "Bharat",
      },
      mobileNumber:"879645493"
    };
    console.log("this is user->",{user})
    let data = await userModel.create(user);
    console.log(data)
}
app.listen(3000)
dbConnect(createUser());