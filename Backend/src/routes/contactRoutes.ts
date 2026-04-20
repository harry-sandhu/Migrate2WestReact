import { Router } from "express";
import { getContacts, submitContact } from "../controllers/contactController";
import { adminOnly, protect } from "../middleware/authmiddleware";

const router = Router();

router.post("/", submitContact);
router.get("/", protect, adminOnly, getContacts);

export default router;
