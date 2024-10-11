import express from "express";
import { register, login, authController } from "../handlers/userHandler.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/getUserData", authMiddleware, authController);

export default router;
