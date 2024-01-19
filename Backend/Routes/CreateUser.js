import * as express from "express";
const router = express.Router();
import User from "../models/User.js";
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const jwtSecret = "qwertyuiop";
router.post(
  "/createuser",
  body("email", "Email entered is incorrect").isEmail(),
  body("name").isLength({ min: 5 }),
  body("password", "Password too weak").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let securePassword = await bcrypt.hash(req.body.password, salt);

    try {
      await User.create({
        name: req.body.name,
        password: securePassword,
        email: req.body.email,
        location: "Delhi",
      });
      res.json({ success: true });
    } catch (error) {
      console.error(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  body("email", "Email entered is incorrect").isEmail(),
  body("password", "Password too weak").isLength({ min: 5 }),
  async (req, res) => {
    let email = req.body.email;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let userData = await User.findOne({ email });

      if (!userData) {
        return res
          .status(400)
          .json({ errors: "Try logging with correct cerdentails" });
      }

      const passwordCompare = await bcrypt.compare(
        req.body.password,
        userData.password
      );
      if (!passwordCompare) {
        return res.json({ errors: "Try logging with correct credentials" });
      }

      const data = {
        user: {
          id: userData.id,
        },
      };
      const authToken = jwt.sign(data, jwtSecret);

      return res.json({ success: true, authToken: authToken });
    } catch (error) {
      console.error(error);
      res.json({ success: false });
    }
  }
);

export default router;
