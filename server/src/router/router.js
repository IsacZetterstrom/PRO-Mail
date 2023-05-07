import express from "express";
import authController from "../controller/authController.js";
import authMiddleware from "../service/authMiddleware.js";
// import inboxController from "../controller/mailFunctionController.js";

const router = express.Router();

router.route("/auth/register").post(authController.register);
router.route("/auth/login").post(authController.login);
// router.post("/inbox", inboxController.inbox);
router.route("/inbox").get(authMiddleware.auth, authController.inbox);

export default router;
