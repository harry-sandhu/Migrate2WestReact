import { Request, Response } from "express";
import SlotBooking from "../models/SlotBooking";

/* ---------------- GET BOOKED SLOTS ---------------- */
export const getBookedSlots = async (req: Request, res: Response) => {
  try {
    const { serviceType } = req.query;

    

    const slots = await SlotBooking.find({
     
      status: "booked"
    });

    return res.json({
      success: true,
      data: slots.map(s => s.slot)
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
};


/* ---------------- BOOK SLOT ---------------- */
export const bookSlot = async (req: Request, res: Response) => {
  try {
    const { serviceType, subService, slot, applicant } = req.body;

    if (!serviceType || !slot || !applicant?.phone) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }

    const exists = await SlotBooking.findOne({
      
      slot
    });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Slot already booked"
      });
    }

    const booking = await SlotBooking.create({
      serviceType,
      subService,
      slot,
      applicant,
      status: "booked"
    });

    return res.json({
      success: true,
      data: booking
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
};



// GET /api/slots/admin
export const getBookedSlotsAdmin = async (_req: Request, res: Response) => {
  try {
    const slots = await SlotBooking.find().sort({ createdAt: -1 });

    return res.json({
      success: true,
      data: slots
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
};


/* ---------------- CANCEL SLOT ---------------- */
export const cancelSlot = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await SlotBooking.findByIdAndDelete(id);

    return res.json({
      success: true,
      message: "Slot cancelled"
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
};