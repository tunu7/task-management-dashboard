const jwt = require("jsonwebtoken");

const authMiddleware = (
  req,
  res,
  next
) => {
  try {

    const authHeader =
      req.headers.authorization;

    // No Authorization Header
    if (!authHeader) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    // Extract token from:
    // "Bearer TOKEN"
    const token =
      authHeader.split(" ")[1];

    // Invalid format
    if (!token) {
      return res.status(401).json({
        message: "Invalid token format",
      });
    }

    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Save decoded user
    req.user = decoded;

    next();

  } catch (error) {

    console.log(
      "JWT ERROR:",
      error.message
    );

    return res.status(401).json({
      message: "Invalid token",
    });

  }
};

module.exports = authMiddleware;