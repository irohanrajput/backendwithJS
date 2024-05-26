import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import { TaskModel } from "./models/task.model.js";

dotenv.config();

const app = express();
app.use(express.json());

app.post("/api/task", async (req, res) => {
  try {
    const task = await TaskModel.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/", (req, res) => {
  res.send("hello world");
});

const startServer = async () => {
    await connectDB();
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
};

startServer();