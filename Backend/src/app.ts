import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import contactRoutes from "./routes/contactRoutes";
import { connectDB } from "./config/db";

const app = express();

app.use(cors());
app.use(express.json());


connectDB();

app.get("/", (_req, res) => {
  res.send("✅ Server is running");
});

app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);

export default app;
