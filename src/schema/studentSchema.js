import mongoose from "mongoose";

let studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name field is required"],
  },
  age: {
    type: Number,
    required: [true, "age field is required"],
  },
  location: {
    type: String,
    required: [true, "location field is required"],
  },
});

export default studentSchema;
