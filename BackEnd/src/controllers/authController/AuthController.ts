import { Request, Response } from "express";

const loginUser = (req: Request, res: Response) => {
  console.log(req.body);
  res.statusCode = 200;
  res.send({
    status: "Good",
  });
};

export = {
    loginUser
}
