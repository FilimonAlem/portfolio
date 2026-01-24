import { Request, Response } from "express";
import nodemailer from "nodemailer";

export const createMessage = async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  // Validate that all env vars exist
  const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;
  if (!EMAIL_HOST || !EMAIL_PORT || !EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
    return res.status(500).json({ message: "Email configuration is missing" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: Number(EMAIL_PORT), // Convert string to number
      secure: false, // true only for port 465
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Contact Form" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      subject: "New Contact Message",
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
};