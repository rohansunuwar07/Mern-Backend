import mongoose from "mongoose";

export let createBookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: [true, "Book Name is required"]
    },
    bookType: {
        type: String,
        required: [true, "Book Name is required"]
    },
    bookQuantity: {
        type: Number,
        required: [true, "Book Quantity is required"]
    },
})