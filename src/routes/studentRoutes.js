import { Router } from "express";
import { createStudentController, deleteStudentController, readAllStudentController, readSpecificStudentController, updateStudentController } from "../controller/studentControllor.js";


let studentRouter = Router();

studentRouter
  .route("/")
  .post(createStudentController)
  .get(readAllStudentController);

studentRouter
  .route("/:id")
  .get(readSpecificStudentController)
  .patch(updateStudentController)
  .delete(deleteStudentController);

export default studentRouter;
