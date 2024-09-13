import mongoose from "mongoose";

export let createUserInfoSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "Fullname is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    gender: {
        type: String,
        required: [true, "gender is required"]
    },
    role: {
        type: String,
        required: [true, "role is required"]
    },
    isVerification: {
        type: Boolean,
        required: [true, "verification is required"]
    },
});