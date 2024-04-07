import express from 'express'
const {dbConnect} = require('./src/database/Database')
const dotenv = require("dotenv");
import userRouter from './src/router/userRouter'

import authRouter from "./src/router/authRouter";
console.log({authRouter})
dotenv.config();
const PORT = process.env.PORT;
var cors = require("cors");
dotenv.config();
const app = express()

app.use(express.json())
app.use(cors());

app.use('/user',userRouter);
app.use('/auth',authRouter)
app.listen(PORT,async ()=>{
  console.log("Server started")
  await dbConnect()
})