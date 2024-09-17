import mongoose from "mongoose";

export let createNewProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },
  quantity: {
    type: Number,
    required: [true, "quantity field is required"],
  },
  price: {
    type: Number,
    required: [true, "price field is required"],
  },
  featured: {
    type: Boolean,
    required: [true, "Featured field is required"],
  },
  productImage: {
    type: String,
    required: [true, "Image is required"],
  },
  manufactureDate: {
    type: String,
    required: [true, "ManufactureDAte is required"],
  },
  company: {
    type: String,
    required: [true, "Company field is required"],
  },
});
