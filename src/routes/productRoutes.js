import { Router } from "express";
import { createProductAndAddToCategory, deleteSpecificProduct, readAllProduct, readSpecificProduct, updateSpecificProduct } from "../controller/productController.js";

let productRouter = Router();
productRouter.route("/").post(createProductAndAddToCategory);
productRouter.route("/").get(readAllProduct);

productRouter.route("/:id").get(readSpecificProduct)

productRouter.route("/:id").patch(updateSpecificProduct);

productRouter.route("/:id").delete(deleteSpecificProduct);




export default productRouter;