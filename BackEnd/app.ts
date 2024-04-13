import express from 'express'
import userRouter from './src/router/userRouter'
import authRouter from "./src/router/authRouter";
const { dbConnect } = require("./src/database/Database");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT;
var cors = require("cors");
dotenv.config();
const app = express()

app.use(express.json())
app.use(cors());
app.use(cookieParser())

app.use('/user',userRouter);
app.use('/auth',authRouter)
app.listen(PORT,async ()=>{
  console.log("Server started")
  await dbConnect()
})

