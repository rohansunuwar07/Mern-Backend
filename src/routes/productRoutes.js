import { Router } from "express";
import { createProductController, deleteSpecificProduct, productCategoryControllorsss, readAllProduct, readSpecificProduct, updateSpecificProduct } from "../controller/productController.js";

let productRouter = Router();
productRouter.route("/").post(createProductController);
productRouter.route("/").get(readAllProduct);

productRouter.route("/:id").get(productCategoryControllorsss)


productRouter.route("/:id").get(readSpecificProduct)

productRouter.route("/:id").patch(updateSpecificProduct);

productRouter.route("/:id").delete(deleteSpecificProduct);




export default productRouter;