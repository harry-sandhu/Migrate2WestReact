import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import contactRoutes from "./routes/contactRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("✅ Server is running");
});

app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);

export default app;
