import { Router } from "express";
import { createBikerController, reallAllBikeInfo } from "../controller/bikerController.js";

let bikeRouter = Router();
bikeRouter.route("/").post(createBikerController);
bikeRouter.route("/").get(reallAllBikeInfo)
export default bikeRouter;