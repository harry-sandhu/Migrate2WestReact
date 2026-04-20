import { Request, Response } from "express";
import Testimonial from "../models/Testimonial";

/* ---------- GET ALL ---------- */
export const getTestimonials = async (_req: Request, res: Response) => {
  try {
    const data = await Testimonial.find().sort({ createdAt: -1 });

    res.json({ success: true, data });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
};

/* ---------- CREATE ---------- */
export const createTestimonial = async (req: Request, res: Response) => {
  try {
    const testimonial = await Testimonial.create(req.body);

    res.json({ success: true, data: testimonial });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
};

/* ---------- DELETE ---------- */
export const deleteTestimonial = async (req: Request, res: Response) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);

    res.json({ success: true });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
};