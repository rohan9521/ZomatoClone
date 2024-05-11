import express from "express";
import authController from "../../controllers/authController";
const authRouter = express.Router();

authRouter.route("/login").post(authController.loginUser);

export default authRouter
