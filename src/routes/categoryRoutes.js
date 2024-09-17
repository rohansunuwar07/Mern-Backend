import { Router } from "express";
import { createCategoryController, categoryControlller } from "../controller/productCategoryControllor.js";

export let productCategoryRouter = Router();
productCategoryRouter.route("/").post(createCategoryController);
productCategoryRouter.route("/").get(categoryControlller);