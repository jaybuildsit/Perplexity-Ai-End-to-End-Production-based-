import "dotenv/config";
import app from "./src/app.js"
import http from "http";
import connectDB from "./src/config/database.js";
import { initSocket } from "./src/sockets/server.socket.js";

const Port=process.env.Port || 3000;


const httpServer = http.createServer(app);

initSocket(httpServer);


connectDB().catch((err)=>{
    console.error("MongoDb Connection failed:",err);
    process.exit(1);
});

httpServer.listen(Port,()=>{
        console.log(`Server running on Port ${Port}`);
    });