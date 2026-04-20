import mongoose from "mongoose";
import { config } from "./config";

const MONGO_URI = config.mongoUri;

if (!MONGO_URI) {
  throw new Error("❌ MONGO_URI missing");
}

// 👇 GLOBAL CACHE (THIS IS THE FIX)
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export const connectDB = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("🔥 Creating new Mongo connection...");

    cached.promise = mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    }).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  console.log("✅ Mongo connected");

  return cached.conn;
};