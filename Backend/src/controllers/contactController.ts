import { Request, Response } from "express";
import Contact from "../models/Contact";

// CREATE CONTACT
export const submitContact = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, country, message, agree } = req.body;

    // validation
    if (!name || !email || !phone || !country || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (!agree) {
      return res.status(400).json({
        success: false,
        message: "You must agree to terms and conditions",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      country,
      message,
      agree,
    });

    res.status(201).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    console.error("CREATE CONTACT ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// GET ALL CONTACTS
export const getContacts = async (_req: Request, res: Response) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(100); // safe limit

    res.json({
      success: true,
      data: contacts,
    });
  } catch (error: any) {
    console.error("GET CONTACTS ERROR:", error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// TOGGLE CALLED
export const toggleCalled = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    contact.called = !contact.called;
    await contact.save();

    res.json({
      success: true,
      data: contact,
    });
  } catch (error: any) {
    console.error("TOGGLE ERROR:", error);

    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};