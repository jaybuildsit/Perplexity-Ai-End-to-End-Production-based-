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

    const emailVerificationToken = jwt.sign({

        email: user.email,

    }, process.env.JWT_SECRET);


    await sendMail({
        to: email,
        subject: "Welcome to Perplexity",
        // text: `Hello ${username},\n\nThank you for registering at Perplexity! We're excited to have you on board.\n\nBest regards,\nThe Perplexity Team`,
        html: `<p>Hello ${username},</p><p>Thank you for registering at Perplexity! We're excited to have you on board.</p>
        <p>Please verify your email by clicking the link below:</p>
        <a href="http://localhost:3000/api/auth/verify-email?token=${emailVerificationToken}">Verify Email</a>

        <p>Best regards,<br>The Perplexity Team</p>`,
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

export async function login(req, res) {

    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
        return res.status(400).json({
            message: "Invalid email or password",
            success: false,
            err: "User not found"
        });
    }

    const isPasswordMatch = await user.comparePassword(password);

    if (!isPasswordMatch) {
        return res.status(400).json({
            message: "Invalid email or password",
            success: false,
            err: "Invalid password"
        });
    }

    if (!user.verified) {
        return res.status(400).json({
            message: "Please verify your email before logging in",
            success: false,
            err: "Email not verified"
        });
    }

    const token = jwt.sign({
        id: user._id,
        username: user.username,
    }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.cookie("token", token)

    res.status(200).json({
        message: "User logged in successfully",
        success: true,
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
        },
    });



}

export async function getMe(req, res) {
    const userId = req.user.id;

    const user = await userModel.findById(userId).select("-password");

    if (!user) {
        return res.status(404).json({
            message: "User not found",
            success: false,
            err: "User not found"
        })
    }
    res.status(200).json({
        message: "User Details fetched successfully",
        success: true,
        user,
    });

}


export async function verifyEmail(req, res) {
    const { token } = req.query;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);


        const user = await userModel.findOne({ email: decoded.email });

        if (!user) {
            return res.status(400).json({
                message: "Invalid token",
                success: false,
                err: "Invalid token"
            });
        }

        user.verified = true;
        await user.save();

        const html =
            `
    <h1>Email Verified Successfully</h1>
    <p>Your email has been verified successfully. You can now log in to your account.</p>
    <a href="http://localhost:3000/login">Go to Login</a>
    `
        return res.send(html);

    } catch (err) {
        return res.status(400).json({
            message: "Invalid token",
            success: false,
            err: "Invalid token"
        });
    }
}

