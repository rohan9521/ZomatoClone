import express from 'express'
import { Request, Response,NextFunction} from "express";
import userRouter from './src/router/userRouter'
import authRouter from "./src/router/authRouter";
const { dbConnect } = require("./src/database/Database");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

const jwt = require("jsonwebtoken");
const API_KEY = process.env.API_KEY;
dotenv.config();
const PORT = process.env.PORT;
var cors = require("cors");
dotenv.config();
const app = express()

app.use(express.json())
app.use(cors());
app.use(cookieParser())
 const protctedRoute = (req:Request,response:Response,next:NextFunction)=>{
  console.log(req.headers)
    const token = req.headers['authorization']
    if(token && token?.includes('Bearer')){
      console.log(token.slice(7));
        console.log(jwt.verify(token.slice(7),API_KEY))
        next()
    }
    console.log(token)
  }
app.use('/user',userRouter);
app.use('/auth',authRouter)
app.listen(PORT,async ()=>{
  console.log("Server started")
  await dbConnect()
})

