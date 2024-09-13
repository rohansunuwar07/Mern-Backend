import mongoose from "mongoose";

export let createTeacherSchema = new mongoose.Schema({
    teacherId: {
        type: Number,
        required: [true, "Teacher id is require"],
    },
    teacherName: {
        type: String,
        required: [true, "Teacher Name is required"],
    },
    teacherFaculty: {
        type: String,
        required: [true, "Teacher Faculty is required"],
    },
    teacherIsMarried: {
        type: Boolean,
        required: [true, "Teacher Marital Status is required"]
    },
});