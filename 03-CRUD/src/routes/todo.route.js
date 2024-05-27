import express from "express";
import { getAllTasks, getOneTask, createTask, updateTask, deleteTask } from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createTask);
router.get("/:id", getOneTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
