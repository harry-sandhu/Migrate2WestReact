import mongoose from "mongoose";
import { config } from "./config";

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectDB = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    console.log("🔥 Connecting to Mongo...");

    cached.promise = mongoose
      .connect(config.mongoUri, {
        serverSelectionTimeoutMS: 5000,
      })
      .then((mongoose) => {
        console.log("✅ MongoDB connected");
        return mongoose;
      })
      .catch((err) => {
        console.error("❌ Mongo connection failed:", err);
        cached.promise = null; // 🔥 IMPORTANT: allow retry
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};