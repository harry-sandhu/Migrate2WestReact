import { Router } from "express";
import { register, login, forgotPassword,getMe, getAllUsers } from "../controllers/authController";
import { adminOnly, protect } from "../middleware/authmiddleware";
const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.get("/me", protect, getMe,adminOnly);
router.get("/", protect, adminOnly, getAllUsers);
export default router;