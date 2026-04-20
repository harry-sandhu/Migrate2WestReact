import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { config } from "../config/config";
import { AuthRequest } from "../middleware/authmiddleware";

export const getMe = async (req: AuthRequest, res: Response) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    return res.json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch user" });
  }
};
// ✅ REGISTER
export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phone } = req.body;

    // 🔒 validation
    if (!name || !email || !password || !phone) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // 🔍 check email
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    // 🔍 check phone
    const existingPhone = await User.findOne({ phone });
    if (existingPhone) {
      return res.status(400).json({
        message: "Phone already exists",
      });
    }

    // 🔐 hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 💾 create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user._id,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error: any) {
    console.error("❌ REGISTER ERROR:", error);

    return res.status(500).json({
      message: error.message || "Registration failed",
    });
  }
};

// ✅ LOGIN
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      config.jwtSecret,
      { expiresIn: "7d" }
    );

    return res.json({
      success: true,
      token,
      user: {
        id: user._id,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error: any) {
    console.error("❌ LOGIN ERROR:", error);

    return res.status(500).json({
      message: error.message || "Login failed",
    });
  }
};

// ✅ FORGOT PASSWORD
export const forgotPassword = async (_req: Request, res: Response) => {
  return res.json({
    success: true,
    message: "Password reset (dummy for now)",
  });
};

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find().select("-password");

    res.json({
      success: true,
      data: users
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};