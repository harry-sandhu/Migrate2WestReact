import mongoose from "mongoose";
import { config } from "./config";

mongoose.set("bufferCommands", false);

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) return;

  console.log("🔥 Connecting to Mongo...");

  await mongoose.connect(config.mongoUri, {
    serverSelectionTimeoutMS: 5000,
  });

  isConnected = true;
  console.log("✅ MongoDB connected");
};