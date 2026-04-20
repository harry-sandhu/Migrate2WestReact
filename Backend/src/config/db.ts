import mongoose from "mongoose";
import { config } from "./config";

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export const connectDB = async (): Promise<void> => {
  if (cached.conn) return;
   console.log("MONGO_URI:", config.mongoUri);
  if (!cached.promise) {
    cached.promise = mongoose.connect(config.mongoUri).then((mongoose) => {
      console.log("✅ MongoDB connected");
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
};
