import mongoose from "mongoose";
import createUserSchema from "../schema/userSchema.js";
import { createTeacherSchema } from "../schema/teacherSchema.js";
import { createBookSchema } from "../schema/booksSchema.js";
import createBikeSchema from "../schema/bikeSchema.js";
import { createUserInfoSchema } from "../schema/webUserSchema.js";
import { createProductSchemas } from "../schema/productSchema.js"
import { categorySchema } from "../schema/categorySchema.js";
import { createNewProductSchema } from "../schema/newProductSchema.js";
import studentSchema from "../schema/studentSchema.js";





export const user = mongoose.model("user", createUserSchema);


export let teacher = mongoose.model("teacher", createTeacherSchema);




export let book = mongoose.model("book", createBookSchema); /*  ✅ */


export const bike = mongoose.model("bike", createBikeSchema);

export let webUser = mongoose.model("webUser", createUserInfoSchema)

export let Category = mongoose.model("Category",categorySchema)
export let Product = mongoose.model("Product", createProductSchemas)




export let product1 = mongoose.model("product1",createNewProductSchema);

export let student = mongoose.model("student",studentSchema)