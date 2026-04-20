import { Router } from "express";
import { getContacts, submitContact, toggleCalled } from "../controllers/contactController";
import { adminOnly, protect } from "../middleware/authmiddleware";

const router = Router();

router.post("/", submitContact);
router.get("/", protect, adminOnly, getContacts);
router.patch("/:id/toggle-called", protect, adminOnly, toggleCalled);

export default router;
