import { Request, Response } from "express";
import axios from "axios";
import Payment from "../models/Payment";
import SlotBooking from "../models/SlotBooking";

/* ---------------- CREATE ORDER ---------------- */
export const createPaymentOrder = async (req: Request, res: Response) => {
  try {
    const {
      amount,
      customer_id,
      customer_email,
      customer_phone,
      serviceType,
      subService,
      slot
    } = req.body;

    const FRONTEND_URL = process.env.FRONTEND_URL;

    if (!amount || !customer_id) {
      return res.status(400).json({
        success: false,
        message: "amount and customer_id are required"
      });
    }

    const orderId = "order_" + Date.now();

    const order = {
      order_id: orderId,
      amount,
      currency: "INR",
      customer_id,
      customer_email: customer_email || "test@example.com",
      customer_phone: customer_phone || "9999999999",
      
return_url: `${FRONTEND_URL}/thank-you?order_id=${orderId}`
    };

    const response = await axios.post(
      `${process.env.BASE_URL}/orders`,
      order,
      {
        auth: {
          username: process.env.API_KEY!,
          password: ""
        },
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    // ✅ SAVE PAYMENT
    await Payment.create({
      orderId,
      serviceType,
      subService,
      slot,
      applicant: {
        name: customer_id,
        phone: customer_phone,
        email: customer_email
      },
      amount,
      method: "gateway",
      status: "created"
    });

    return res.json({
      success: true,
      data: response.data,
      orderId
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: error.response?.data || error.message
    });
  }
};


/* ---------------- PAYMENT STATUS + AUTO BOOK ---------------- */
export const getPaymentStatus = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;

    const response = await axios.get(
      `${process.env.BASE_URL}/orders/${orderId}`,
      {
        auth: {
          username: process.env.API_KEY!,
          password: ""
        }
      }
    );

    const order = response.data;

    const payment = await Payment.findOne({ orderId });

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found"
      });
    }

    // ✅ if paid → update + book slot
    if (order.status === "PAID" && payment.status !== "paid") {
      payment.status = "paid";
      await payment.save();

      // prevent duplicate booking
      const exists = await SlotBooking.findOne({
        
        slot: payment.slot
      });

      if (!exists) {
        await SlotBooking.create({
          serviceType: payment.serviceType,
          subService: payment.subService,
          slot: payment.slot,
          applicant: payment.applicant
        });
      }
    }

    return res.json({
      success: true,
      data: order
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: error.response?.data || error.message
    });
  }
};


/* ---------------- MANUAL PAYMENT ---------------- */
export const createManualPayment = async (req: Request, res: Response) => {
  try {
    const {
      serviceType,
      subService,
      slot,
      applicant,
      amount,
      method,
      paymentDetails
    } = req.body;

    const payment = await Payment.create({
      serviceType,
      subService,
      slot,
      applicant,
      amount,
      method,
      status: "pending",
      paymentDetails
    });

    return res.json({
      success: true,
      data: payment
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

export const getAllPayments = async (_req: Request, res: Response) => {
  try {
    const payments = await Payment.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: payments
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};


/* ---------------- UPDATE PAYMENT STATUS (ADMIN) ---------------- */
export const updatePaymentStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const payment = await Payment.findById(id);

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    payment.status = status;
    await payment.save();

    // ✅ if marked paid → book slot
    if (status === "paid") {
      const exists = await SlotBooking.findOne({
        slot: payment.slot
      });

      if (!exists) {
        await SlotBooking.create({
          serviceType: payment.serviceType,
          subService: payment.subService,
          slot: payment.slot,
          applicant: payment.applicant
        });
      }
    }

    res.json({ success: true, data: payment });

  } catch (error: any) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};