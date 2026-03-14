import mongoose from "mongoose";
import { config } from "./config";

export const connectDB = async (): Promise<void> => {
  try {
    if (mongoose.connection.readyState === 1) return;

    await mongoose.connect(config.mongoUri);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB error", error);
    throw error;
  }
};

