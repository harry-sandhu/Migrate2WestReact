import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { connectDB } from "./config/db";
import { config } from "./config/config";

// Connect to database
connectDB();

// Start server (works for Railway, Vercel, and local)
app.listen(config.port, () => {
  console.log(`🚀 Server running on port ${config.port}`);
});

// Export for Vercel serverless
export default app;
