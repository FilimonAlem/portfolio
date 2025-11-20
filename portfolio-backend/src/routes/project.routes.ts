import { Router } from "express";
import {Project } from "../models/project.model"; // Mongoose model

const router = Router();

// GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find(); // Fetch all from MongoDB
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error fetching projects" });
  }
});

export default router;
