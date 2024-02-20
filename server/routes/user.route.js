import express from "express";
import {
  signup,
  login,
  requestPasswordResetController,
  resetPasswordController,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/requestResetPassword", requestPasswordResetController);
router.post("/resetPassword", resetPasswordController);

export default router;