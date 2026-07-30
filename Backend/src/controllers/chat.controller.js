import { response } from "express";
import { generateResponse ,generateChatTitle} from "../services/ai.service.js";
import chatModel from "../models/chat.model.js";
import messageModel from "../models/message.model.js";



export async function sendMessage(req, res) {

    const { message } = req.body;

    const result = await generateResponse(message);

    const title = await generateChatTitle(message);

    const chat = await chatModel.create({

        user:req.user.id,title})
        

    // console.log(title);

    const aiMessage = await messageModel.create({
        chat:chat._id,
        content:result,
        role:"ai",

    })

    res.status(201).json({
        title,
        chat,
        aiMessage
    })

}

