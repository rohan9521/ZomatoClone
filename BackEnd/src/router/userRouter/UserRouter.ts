import express from "express";
import userController from "../../controllers/userController";

const userRouter = express.Router();

userRouter.route("/signup").post(userController.userSignUp);

userRouter.route("/setCookies").get(userController.setCookies);

userRouter.route("/:id").get(userController.getUserById);

export default userRouter;
