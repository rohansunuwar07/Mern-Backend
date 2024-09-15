import mongoose from "mongoose";

export let createProductSchemas = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
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
  categories: [
    {
      // Ensure this matches the Category schema field
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Category is required"],
    },
  ],
});



