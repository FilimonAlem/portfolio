import { Router } from "express";
import { createMessage } from "../controllers/message.controller";

const router = Router();

router.post("/contact", createMessage);

export default router;
