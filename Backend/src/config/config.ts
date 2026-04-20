import dotenv from "dotenv";

dotenv.config();

// Required env variables
const requiredEnvVars = ["MONGO_URI", "JWT_SECRET"];

requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    console.error(`❌ Missing required environment variable: ${envVar}`);
    process.exit(1);
  }
});

export const config = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI as string,
  jwtSecret: process.env.JWT_SECRET as string,
  nodeEnv: process.env.NODE_ENV || "development",
  corsOrigin: process.env.CORS_ORIGIN || "*",
};