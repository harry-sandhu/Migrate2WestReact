import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import { config } from "./config/config";

// ❌ NO connectDB here

if (!process.env.VERCEL) {
  app.listen(config.port || 3000, () => {
    console.log(`🚀 Server running on port ${config.port || 3000}`);
  });
}

export default app;