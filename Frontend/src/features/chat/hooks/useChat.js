import { initializeSocketConnection } from "../services/chat.socket";
import {sendMessage,getChats,getMessages,deleteChats} from "../services/chat.api"
import{useDispatch} from "react-redux";

export const useChat = () => {

    const dispatch = useDispatch();

    async function handleSendMessage({message, chatId}) {
        dispatch(setLoading(true))
        const data =await sendMessage({message, chatId})
        const {chat, aiMessage} = data


    }

    return{
        initializeSocketConnection,
    }

}