import { Router } from "express";
import { getServiceData, updateServiceData } from "../controllers/serviceDataContoller";
import { protect , adminOnly} from "../middleware/authmiddleware";

const router = Router();

// Public → frontend fetch
router.get("/", getServiceData);

// Admin → update
router.put("/", protect, adminOnly, updateServiceData);

export default router;