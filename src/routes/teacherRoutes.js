import { Router } from "express";
import { createTeacherController } from "../controller/teacherController.js";

export let teacherRouter = Router();
teacherRouter.route("/").post(createTeacherController);