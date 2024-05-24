import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    email: {
      type: String,
      required: true,
      unique: [true, "email registered already"],
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password in required"]
    }

  }, {timestamps: true}
  )


export const User = mongoose.model("User", userSchema)