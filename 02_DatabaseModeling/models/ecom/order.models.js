import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    customer: {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
    },

    orderItems: [orderItemSchema],

    orderPrice: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema)
