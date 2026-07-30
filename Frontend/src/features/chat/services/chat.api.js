import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
    credentials: true,

})

export const sendMessage = async ({message, chatId}) => {

    const response = await api.post("/api/chat/message", { message, chat: chatId })
    return response.data

}
export const getChats = async () => {

    const response = await api.get("/api/chat/chats")
    return response.data

}

export const getMessages = async (chatId) => {

    const response = await api.get(`/api/chat/messages/${chatId}`)
    return response.data

}

export const deleteChats = async (chatId) => {
    const response = await api.delete(`/api/chat/delete/${chatId}`)
    return response.data
} 