import {Request,Response } from 'express'
import userModel from '../../models/User';
import { ObjectId } from 'mongodb';
const userSignUp = async(req:Request, res:Response) => {
  console.log(req.body);
  const user = await userModel.create(req.body)
  res.statusCode = 200;
  res.send({
    status: "Good",
    userId:user._id
  });
}

// this is an example of setting cookies it will be modified in future.
const setCookies = async (req: Request, res: Response) => {
  res.cookie('userName',req.body.name)
  res.send({
    status:'cookieSet'
  })
};

const getUserById = async (req: Request, res: Response) => {
 console.log(req.body)
  const user = await userModel.findById(req.params.id)
  res.send({
    user
  });
};
const userController = {
  userSignUp,
  setCookies,
  getUserById
}

export default userController