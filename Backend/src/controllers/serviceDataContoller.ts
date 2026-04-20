import { Request, Response } from "express";
import ServiceData from "../models/ServiceData";

// ✅ GET all service data
export const getServiceData = async (_req: Request, res: Response) => {
  try {
    const data = await ServiceData.findOne().lean();

    if (!data) {
      return res.status(404).json({ message: "No service data found" });
    }

    return res.json(data);
  } catch (error: any) {
    console.error("❌ GET SERVICE DATA ERROR:", error);
    return res.status(500).json({ message: "Failed to fetch service data" });
  }
};

// ✅ UPDATE (admin)
export const updateServiceData = async (req: Request, res: Response) => {
  try {
    const updated = await ServiceData.findOneAndUpdate(
      {},
      req.body,
      {
        new: true,
        upsert: true, // create if not exists
      }
    );

    return res.json(updated);
  } catch (error: any) {
    console.error("❌ UPDATE SERVICE DATA ERROR:", error);
    return res.status(500).json({ message: "Update failed" });
  }
};