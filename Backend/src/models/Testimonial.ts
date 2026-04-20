// models/Testimonial.ts
import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    message: { type: String, required: true },

    // optional but useful
    designation: String,   // e.g. "Student", "PR Applicant"
    country: String        // e.g. "Canada", "UK"
  },
  { timestamps: true }
);

export default mongoose.model("Testimonial", testimonialSchema);