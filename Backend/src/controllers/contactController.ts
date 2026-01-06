import { Request, Response } from "express";
import Contact from "../models/Contact";

export const submitContact = async (req: Request, res: Response) => {
  try {
    const { name, email, country, message, agree } = req.body;

    if (!agree) {
      return res
        .status(400)
        .json({ message: "You must agree to terms and conditions" });
    }

    await Contact.create({
      name,
      email,
      country,
      message,
      agree,
    });

    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
