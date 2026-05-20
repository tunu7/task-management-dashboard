const express = require("express");
const { body } = require("express-validator");

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

const validate = require("../middleware/validateMiddleware");

const router = express.Router();


// Register Route
router.post(
  "/register",
  [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name is required"),

    body("email")
      .isEmail()
      .withMessage("Valid email required"),

    body("password")
      .isLength({ min: 6 })
      .withMessage(
        "Password must be at least 6 characters"
      ),
  ],
  validate,
  registerUser
);


// Login Route
router.post(
  "/login",
  [
    body("email")
      .isEmail()
      .withMessage("Valid email required"),

    body("password")
      .notEmpty()
      .withMessage("Password required"),
  ],
  validate,
  loginUser
);

module.exports = router;