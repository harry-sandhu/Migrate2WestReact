import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { connectDB } from "./config/db";
import { config } from "./config/config";

const startServer = async () => {
  try {
    await connectDB(); // IMPORTANT
    app.listen(config.port || 3000, () => {
      console.log(`🚀 Server running on port ${config.port || 3000}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server", err);
  }
};

startServer();