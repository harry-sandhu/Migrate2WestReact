import { Request, Response } from "express";

export const verifyCaptcha = async (req: Request, res: Response) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Token missing",
      });
    }

    const secret = process.env.RECAPTCHA_SECRET;

    const googleRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secret}&response=${token}`,
      }
    );

    const data = await googleRes.json();
    console.log("RECAPTCHA DATA:", data);

    const MIN_SCORE =
      process.env.NODE_ENV === "production" ? 0.5 : 0.1;

    if (!data.success || data.score < MIN_SCORE) {
      return res.status(400).json({
        success: false,
        message: "Captcha verification failed",
        details: data,
      });
    }

    return res.json({
      success: true,
      message: "Captcha verified",
      score: data.score,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
