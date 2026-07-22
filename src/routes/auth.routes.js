import { Router } from "express";
// import { body, validationResult } from "express-validator";
import { register } from "../controllers/auth.controller.js";
import { registerValidator } from "../validators/auth.validator.js";

const  authRouter = Router();
authRouter.post("/register", registerValidator, register);

export default authRouter;

