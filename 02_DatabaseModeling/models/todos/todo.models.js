import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema(
  {
    task: {
      type: string,
      required: true
    },
    ifCompleted: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      reference: "User", 
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo "
      }
    ] //array of Sub-Todos

  }, {timestamps: true}
)

export const Todo = mongoose.model("Todo", todoSchema)