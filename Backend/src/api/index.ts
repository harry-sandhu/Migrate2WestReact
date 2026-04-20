import app from "../app";
import { connectDB } from "../config/db";

let isDbReady = false;

export default async function handler(req: any, res: any) {
  try {
    if (!isDbReady) {
      console.log("🔥 First request → connecting DB...");
      await connectDB();
      isDbReady = true;
      console.log("✅ DB ready, proceeding...");
    }

    return app(req, res);
  } catch (error) {
    console.error("❌ Server error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}