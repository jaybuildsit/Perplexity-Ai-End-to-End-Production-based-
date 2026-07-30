import { Router } from "express";
import { sendMessage,getChats,getMessages,deleteChats } from "../controllers/chat.controller.js";
import { authUser } from "../middleware/auth.middleware.js";

const chatRouter = Router();

chatRouter.post("/message", authUser, sendMessage);
chatRouter.get("/chats", authUser, getChats);
chatRouter.get("/messages/:chatId", authUser, getMessages);
chatRouter.delete("/delete/:chatId", authUser, deleteChats);



export default chatRouter;