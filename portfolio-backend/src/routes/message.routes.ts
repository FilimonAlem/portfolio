import { Router } from "express";
import { createMessage } from "../controllers/message.controller";

const router = Router();

// Optional GET route to verify the API is live
router.get("/", (req, res) => {
  res.json({ status: "Contact API is live" });
});

// Your actual POST route
router.post("/", createMessage);

export default router;
