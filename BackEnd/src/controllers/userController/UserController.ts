import {Request,Response } from 'express'
import userModel from '../../models/User';
const userSignUp = async(req:Request, res:Response) => {
  console.log(req.body);
  const user = await userModel.create(req.body)
  res.statusCode = 200;
  res.send({
    status: "Good",
    userId:user._id
  });
}

export = {userSignUp}