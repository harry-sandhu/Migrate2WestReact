import express from "express";
import {
  getBookedSlots,
  bookSlot,
  getBookedSlotsAdmin,
  cancelSlot
} from "../controllers/slotController";
import { adminOnly, protect } from "../middleware/authmiddleware";

const router = express.Router();

// GET booked slots
router.get("/", getBookedSlots);

// POST book slot
router.post("/book", bookSlot);

router.get("/admin", protect, adminOnly, getBookedSlotsAdmin);


router.delete("/:id", protect, adminOnly, cancelSlot);

export default router;