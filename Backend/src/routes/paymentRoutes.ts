import express from "express";
import {
  createPaymentOrder,
  getPaymentStatus,
  createManualPayment,
  getAllPayments,
  updatePaymentStatus
} from "../controllers/paymentController";
import { adminOnly, protect } from "../middleware/authmiddleware";

const router = express.Router();

router.post("/create-order", createPaymentOrder);
router.get("/status/:orderId", getPaymentStatus);
router.post("/manual", createManualPayment);
router.get("/", protect, adminOnly, getAllPayments);
router.put("/:id/status", protect, adminOnly, updatePaymentStatus);
export default router;