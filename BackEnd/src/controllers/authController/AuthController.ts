import { Request, Response } from "express";
import userModel from "../../models/User";

const jwt = require("jsonwebtoken");

const API_KEY = process.env.API_KEY;


const loginUser = async (req: Request, res: Response) => {
  const user = await userModel.findOne({ mobileNumber: req.body.mobileNumber });
  if (user) {
    res.statusCode = 200;
    console.log({ user });
    const token = jwt.sign({
      id:user._id
    },API_KEY)
    res.send({
      user: user,
      token:token
    });
  }else{
      res.statusCode = 200;
      console.log({ user });
      res.send({
        error: "UserNotFound",
      });

  }
};

export = {
  loginUser,
};
