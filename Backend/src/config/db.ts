import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    if (mongoose.connection.readyState === 1) return;

    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB error", error);
    throw error; 
  }
};

