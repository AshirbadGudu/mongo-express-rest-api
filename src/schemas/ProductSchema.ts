import mongoose, { Schema } from "mongoose";
import { Product } from "../types";

export default new Schema<Product>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    price: {
      type: Number,
      required: true,
      min: 1,
    },
    description: {
      type: String,
      minlength: 3,
      maxlength: 1200,
    },
    image: {
      type: String,
    },
    category: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Category",
    },
    createdAt: {
      type: Date,
      default: Date.now,
      immutable: true,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "Products" }
);
