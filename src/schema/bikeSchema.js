import mongoose from "mongoose";
let createBikeSchema = new mongoose.Schema({
    bikename: {
        type: String,
        required: [true, "Bike name is required"],
    },
    bikeModel: {
        type: String,
        required: [true, "Bike Model is required"],
    },
    bikeLots: {
        type: Number,
        required: [true, "Bike lot number is required"],
    },
    bikeMilege: {
        type: Number,
        required: [true, "Bike Milege is required"]
    }
});
export default createBikeSchema;