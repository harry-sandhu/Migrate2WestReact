import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { connectDB } from "./config/db";
import { config } from "./config/config";

// Connect to database
connectDB();

// Start server ONLY if not running on Vercel
if (!process.env.VERCEL) {
  app.listen(config.port || 3000, () => {
    console.log(`🚀 Server running on port ${config.port || 3000}`);
  });
}

// Export for Vercel serverless
export default app;