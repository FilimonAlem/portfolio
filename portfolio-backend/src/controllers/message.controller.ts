import { Request, Response } from "express";
import Message from "../models/message.model";

export const createMessage = async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  await Message.create({ name, email, message });

  return res.status(201).json({ success: true });
};
