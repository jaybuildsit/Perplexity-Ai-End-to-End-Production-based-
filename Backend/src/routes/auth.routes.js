import { Router } from "express";
// import { body, validationResult } from "express-validator";
import { register, verifyEmail, login, getMe } from "../controllers/auth.controller.js";
import { registerValidator, loginValidator } from "../validators/auth.validator.js";
import { authUser } from "../middleware/auth.middleware.js";


const authRouter = Router();
authRouter.post("/register", registerValidator, register);

authRouter.post("/login", loginValidator, login);

authRouter.get("/get-me", authUser, getMe);



authRouter.get("/verify-email", verifyEmail);

export default authRouter;

