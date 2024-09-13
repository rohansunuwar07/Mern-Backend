import mongoose from "mongoose";

let connectMongoose = () => {
    mongoose.connect("mongodb://localhost:27017/r1-2");
    console.log("Mongoose Database connected successfully");
}
export default connectMongoose;