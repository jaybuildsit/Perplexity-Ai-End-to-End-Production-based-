import { createSlice } from "@reduxjs/toolkit";
const chatSlice = createSlice({
    name: "chat",
    initialState: {
        chats: {},
        currentChatId: null,
        isLoading: false,
        error: null,
    },
    reducers: {
        setChats:(state, action)=> {
            state.chats = action.payload;
        },
        setCurrentChatId:(state, action)=> {
            state.currentChatId = action.payload;
        },
        setLoading:(state, action)=> {
            state.isLoading = action.payload;
        },
        setError:(state, action)=> {
            state.error = action.payload;
        }
    }
})

export const { setChats, setCurrentChatId, setLoading, setError } = chatSlice.actions;
export default chatSlice.reducer;


// chats = {
//     "docker and AWS": {
//         messages: [
//             {
//                 role: "user",
//                 content: "How do I deploy a Docker container to AWS?"
//             }, {
//                 role: "ai",
//                 content: "To deploy a Docker container to AWS, you can use Amazon Elastic Container Service (ECS) or AWS Fargate. First, create a Docker image of your application and push it to Amazon Elastic Container Registry (ECR). Then, create an ECS cluster and define a task definition that specifies the Docker image and resource requirements. Finally, launch the task in the ECS cluster or use Fargate to run the container without managing servers."
//             }
//         ],
//         id: "docker-and-aws",
//         lastUpdated: "2023-09-15T12:34:56Z",

//     },
   
// }