import mongoose from "mongoose";

export const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Category name is required"],
    unique: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
});
