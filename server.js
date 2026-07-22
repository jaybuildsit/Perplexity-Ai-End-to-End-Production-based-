import "dotenv/config";
import app from "./src/app.js"
import connectDB from "./src/config/database.js";

const Port=process.env.Port || 3000;

connectDB().catch((err)=>{
    console.error("MongoDb Connection failed:",err);
    process.exit(1);
});

app.listen(Port,()=>{
        console.log(`Server running on Port ${Port}`);
    });