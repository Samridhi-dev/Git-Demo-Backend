import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();


// CREATE CONTACT MESSAGE

router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      course,
      message,
    } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Name, email and message are required",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      course,
      message,
    });

    res.status(201).json({
      message: "Message sent successfully",
      contact,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to send message",
    });
  }
});


// GET ALL CONTACT MESSAGES

router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 });

    res.json(contacts);

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch messages",
    });
  }
});


export default router;