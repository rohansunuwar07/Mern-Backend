import { Router } from "express";
import { createBookControllor, realAllBook } from "../controller/bookController.js";

export let bookRouter = Router();
bookRouter.route("/").post(createBookControllor);
bookRouter.route("/").get(realAllBook)