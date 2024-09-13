import mongoose from "mongoose";

let createUserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
    },
    address: {
        type: String,
        required: [true, "Address is required"]
    },
    isMarried: {
        type: Boolean,
        required: [true, "Maritial Status is required"]
    },
});

export default createUserSchema;