import express from "express";
import authController from "../../controllers/authController";
const authRouter = express.Router();

authRouter.route("/login").get(authController.loginUser);

export default authRouter
