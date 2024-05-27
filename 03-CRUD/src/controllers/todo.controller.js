import { TaskModel } from "../models/task.model.js";
import { ObjectId } from 'mongodb'; // Import ObjectId from MongoDB


export const getAllTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getOneTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await TaskModel.findById(id);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const task = await TaskModel.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await TaskModel.findByIdAndUpdate(id, req.body);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    const updatedTask = await TaskModel.findById(id);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await TaskModel.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({ message: "task not found" });
    }

    res.status(200).json({ message: "task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
