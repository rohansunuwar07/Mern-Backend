import { Router } from "express";
import { createCategoryControllor, readSpecificCategory } from "../controller/productCategoryControllor.js";

export let productCategoryRouter = Router();
productCategoryRouter.route("/").post(createCategoryControllor);
productCategoryRouter.route("/").get(readSpecificCategory)