import app from "../app";
import { connectDB } from "../config/db";

let isConnected = false;

export default async function handler(req: any, res: any) {
  try {
    if (!isConnected) {
      await connectDB();
      isConnected = true;
      console.log("✅ DB Connected");
    }

    return app(req, res);

  } catch (error) {
    console.error("❌ Server error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
}