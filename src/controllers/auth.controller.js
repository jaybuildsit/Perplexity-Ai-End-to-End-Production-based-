import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { sendMail } from "../services/mail.service.js";

export async function register(req, res) {
    const { username, email, password } = req.body;

    const isUserAlreadyExist = await userModel.findOne({
        $or: [{ username }, { email }],

    })

    if (isUserAlreadyExist) {
        return res.status(400).json({
            message: "Username or email already exists",
            success: false,
            err: "Username or email already exists"
        });

    }

    const user = await userModel.create({ username, email, password });


    await sendMail({
        to: email,
        subject: "Welcome to Perplexity",
        // text: `Hello ${username},\n\nThank you for registering at Perplexity! We're excited to have you on board.\n\nBest regards,\nThe Perplexity Team`,
        html: `<p>Hello ${username},</p><p>Thank you for registering at Perplexity! We're excited to have you on board.</p><p>Best regards,<br>The Perplexity Team</p>`,
    });

    res.status(201).json({
        message: "User registered successfully",
        success: true,
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
        },

    })

}