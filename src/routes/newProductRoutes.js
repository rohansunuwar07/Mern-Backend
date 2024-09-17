import { Router } from "express";
import { createProductController, deleteProductController, readAllProductController, readSpecificProductController, updateProductController } from "../controller/newProductControllor.js";

let newProductRouter = Router();

newProductRouter.route("/").post(createProductController);
newProductRouter.route("/").get(readAllProductController);

// Dynamic id => /:id

newProductRouter.route("/:id").get(readSpecificProductController);

newProductRouter.route("/:id").patch(updateProductController);

newProductRouter.route("/:id").delete(deleteProductController);

export default newProductRouter;