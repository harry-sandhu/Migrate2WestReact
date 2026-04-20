// models/Payment.ts
import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  orderId: String, // from gateway

  serviceType: String,
  subService: String,

  slot: {
  type: String,
  required: true // ✅ ADD THIS
},

  applicant: {
    name: String,
    phone: String,
    email: String
  },

  amount: Number,

  method: {
    type: String,
    enum: ["gateway", "upi", "bank", "qr"]
  },

  status: {
    type: String,
    enum: ["created", "pending", "paid", "failed"],
    default: "created"
  },

  paymentDetails: {
    utr: String,
    bankName: String,
    accountLast4: String,
    appUsed: String
  }

}, { timestamps: true });

export default mongoose.model("Payment", paymentSchema);