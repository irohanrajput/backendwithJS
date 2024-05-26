import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    ifCompleted:{
        type: Boolean,
        required: true,
        default: false

    }
    
},{timestamps: true})

export const TaskModel = mongoose.model("Task", taskSchema)