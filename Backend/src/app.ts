import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";

import authRoutes from "./routes/authRoutes";
import contactRoutes from "./routes/contactRoutes";
import captchaRoutes from "./routes/captchaRoutes";
import paymentRoutes from "./routes/paymentRoutes";
import serviceDataRoutes from "./routes/serviceDataRoutes";
import slotRoutes from "./routes/slotRoutes";
import blogRoutes from "./routes/blogRoutes";
import testimonialRoutes from "./routes/testimonialRoutes";

const app = express();

/* ---------- RATE LIMIT ---------- */
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

/* ---------- CORS ---------- */
app.use(cors());

app.use(express.json());

/* ---------- REQUEST LOGGING ---------- */
app.use((req, _res, next) => {
  console.log(`${req.method} ${req.url}`, { ip: req.ip });
  next();
});

/* ---------- HEALTH ---------- */
app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString()
  });
});

app.get("/", (_req, res) => {
  res.send("✅ Server is running");
});

/* ---------- ROUTES ---------- */
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/captcha", captchaRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/services", serviceDataRoutes);
app.use("/api/slots", slotRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/testimonials", testimonialRoutes);

/* ---------- 404 ---------- */
app.use((_req, res) => {
  res.status(404).json({ message: "Route not found" });
});

/* ---------- ERROR HANDLER ---------- */
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

export default app;