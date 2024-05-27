import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import todoRouter from "./routes/todo.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/task", todoRouter);



const startServer = async () => {
    await connectDB();
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
};
startServer();