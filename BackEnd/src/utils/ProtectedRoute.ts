import { Request, Response,NextFunction} from "express";
const jwt = require("jsonwebtoken");
const API_KEY = process.env.API_KEY;

 const protctedRoute = (req:Request,response:Response,next:NextFunction)=>{
    const token = req.headers['Authorization']
    if(token && token?.includes('Bearer')){
        console.log(jwt.verify(token.slice(7),API_KEY))
        next()
    }
}
export default protctedRoute