import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatMistralAI } from "@langchain/mistralai";
import { HumanMessage, SystemMessage, AIMessage } from "langchain"


const geminiModel = new ChatGoogleGenerativeAI({
  model: "gemini-3.1-flash-lite",
  apiKey: process.env.GOOGLE_API_KEY,
});


const mistralModel = new ChatMistralAI({
  model: "mistral-small-latest",
  apiKey: process.env.MISTRAL_API_KEY
})

export async function generateResponse(messages) {

  const response = await geminiModel.invoke(messages.map(msg=>{
    if(msg.role === "user") {
      return new HumanMessage(msg.content)
    }else if(msg.role === "ai") {
      return new AIMessage(msg.content)
    }
  }));

  return response.text;

}

export async function generateChatTitle(message) {

  const response = await mistralModel.invoke([
    new SystemMessage(`You are a helpful assistant that generates a title for a chat conversation based on the user's message.
      User will provide a message, and you will respond with a concise and relevant title for the chat. Please ensure the title is clear in 2-5 words, descriptive, and captures the essence of the conversation.
      `),
    new HumanMessage(`Generate a title for the following first message: "${message}"`)
  ])

  return response.text;
}