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

  // 🔥 WAIT UNTIL READY STATE IS 1
  if (mongoose.connection.readyState !== 1) {
    await new Promise((resolve, reject) => {
      mongoose.connection.once("connected", resolve);
      mongoose.connection.once("error", reject);
    });
  }

  isConnected = true;
  console.log("✅ MongoDB fully ready");
};