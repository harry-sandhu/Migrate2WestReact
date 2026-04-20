// models/SlotBooking.ts
import mongoose from "mongoose";

const slotBookingSchema = new mongoose.Schema({
  serviceType: String,
  subService: String,

  slot: {
    type: String,
    required: true
    
  },

  applicant: {
    name: String,
    phone: String,
    email: String
  },

  status: {
    type: String,
    default: "booked"
  }

}, { timestamps: true });

export default mongoose.model("SlotBooking", slotBookingSchema);