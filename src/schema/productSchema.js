import mongoose from "mongoose";

export let createProductSchemas = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
  },
  slug: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  company: {
    type: String,
    required: [true, "Company is required"],
  },
  categories: {
    type: mongoose.ObjectId,
    ref: "Category",
    required: [true, "Category is required"],
  },
  description: {
    type: String,
    required: [true, "Description about product is required"],
  },
});
