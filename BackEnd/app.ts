const express = require('express')
const {dbConnect} = require('./database/Database')
const dotenv = require("dotenv");
const userModel = require('./models/User')
const app = express()
app.listen(3000)


dotenv.config();
const router = express.Router();

dbConnect()

const createUser =async ()=>{
    let user = {
      name: "ROhan",
      email: "rohan@gmail.com",
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
      mobileNumber:"879645413"
    };
    let data = await userModel.create(user)
    console.log(data)
}
createUser()