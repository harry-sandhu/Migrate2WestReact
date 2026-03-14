import express from "express";
import { createPaymentOrder } from "../controllers/paymentController";

const router = express.Router();

router.post("/create-order", createPaymentOrder);

export default router;