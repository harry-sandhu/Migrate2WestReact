import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import contactRoutes from "./routes/contactRoutes";
import { connectDB } from "./config/db";
import captchaRoutes from "./routes/captchaRoutes";

const app = express();

app.use(cors());
app.use(express.json());


connectDB();

app.get("/", (_req, res) => {
  res.send("✅ Server is running");
});

app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/captcha", captchaRoutes);

export default app;
