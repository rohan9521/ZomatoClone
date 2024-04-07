import express from "express";
import userSignUp from "../../controllers/userController";

const userRouter = express.Router();
console.log(JSON.stringify(userSignUp));
userRouter.route("/signup").post(userSignUp.userSignUp);

export default userRouter;
