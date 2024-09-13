import mongoose from "mongoose";
import createUserSchema from "../schema/userSchema.js";
import { createTeacherSchema } from "../schema/teacherSchema.js";
import { createBookSchema } from "../schema/booksSchema.js";
import createBikeSchema from "../schema/bikeSchema.js";
import { createUserInfoSchema } from "../schema/webUserSchema.js";
;
import categorySchemas from "../schema/categorySchema.js";
import { createProductSchema } from "../schema/productSchema.js";




export const user = mongoose.model("user", createUserSchema);


export let teacher = mongoose.model("teacher", createTeacherSchema);




export let book = mongoose.model("book", createBookSchema); /*  ✅ */


export const bike = mongoose.model("bike", createBikeSchema);

export let webUser = mongoose.model("webUser", createUserInfoSchema)

export let category = mongoose.model('category', categorySchemas);

export let products = mongoose.model('products', createProductSchema)