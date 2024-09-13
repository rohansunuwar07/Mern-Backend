import { Router } from "express";
import { createWebUserControllor, deleteWebUserControllor, forgetPassword, login, myProfile, readAllWebUserControllor, readAllWebUserSpecificControllor, resetPassword, updatePassword, updateProfile, updateWebUserSpecificControllor, verifyEmail } from "../controller/webUserControllor.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { isAuthorization } from "../middleware/isAuthorization.js";

let webUserRouter = Router();
webUserRouter.route("/").post(createWebUserControllor)
.get(
  isAuthenticated,
  isAuthorization(["admin", "superAdmin"]),
  readAllWebUserControllor
);

webUserRouter.route("/verify-email").post(verifyEmail);
webUserRouter.route("/login").post(login);
webUserRouter.route("/my-profile").get(isAuthenticated, myProfile);
webUserRouter.route("/update-profile").patch(isAuthenticated, updateProfile)
webUserRouter.route("/update-password").patch(isAuthenticated, updatePassword);
webUserRouter.route("/forget-password").post(forgetPassword);
webUserRouter.route("/reset-password").patch(isAuthenticated, resetPassword);


// Dynamic

webUserRouter.route("/:id").get(readAllWebUserSpecificControllor)
.patch(
  isAuthenticated,
  isAuthorization(["superAdmin"]),
  updateWebUserSpecificControllor
)
.delete(
  isAuthenticated,
  isAuthorization(["superAdmin"]),
  deleteWebUserControllor
);


export default webUserRouter;