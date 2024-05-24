import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true,
        lowecase: true
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    quantity:{
        type: Number,
        required: true,
        default: 0
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
}, {timestamps: true})

export const Product = mongoose.model("Product", productSchema)