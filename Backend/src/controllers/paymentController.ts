import { Request, Response } from "express";
import axios from "axios";

export const createPaymentOrder = async (req: Request, res: Response) => {
  try {

    const { amount, customer_id, customer_email, customer_phone } = req.body;

    if (!amount || !customer_id) {
      return res.status(400).json({
        success: false,
        message: "amount and customer_id are required"
      });
    }

    const order = {
      order_id: "order_" + Date.now(),
      amount: amount,
      currency: "INR",

      customer_id: customer_id,
      customer_email: customer_email || "test@example.com",
      customer_phone: customer_phone || "9999999999",

      return_url: "http://localhost:5000/thank-you"
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

    return res.json({
      success: true,
      data: response.data
    });

  } catch (error: any) {

    return res.status(500).json({
      success: false,
      error: error.response?.data || error.message
    });

  }
};