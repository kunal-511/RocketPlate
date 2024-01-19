import express from "express";
const router = express.Router();
import { food_items, food_category } from "../index.js";

router.post("/foodData", (req, res) => {
  try {
    res.json({ food_items, food_category });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server Error" });
  }
});

export default router;
