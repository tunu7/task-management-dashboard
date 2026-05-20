const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const connectDB = require("./config/db");

// Load ENV
dotenv.config();

// Validate ENV
if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI missing");
}

// Connect DB
connectDB();

const app = express();

// Security Middleware
app.use(helmet());

// Logger
app.use(morgan("dev"));

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://task-management-dashboard-sand.vercel.app",
    ],
    credentials: true,
  })
);

// Body Parser
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

// Routes
app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

app.use(
  "/api/tasks",
  require("./routes/taskRoutes")
);

// Home Route
app.get("/", (req, res) => {
  res.send("API Running Successfully");
});

// 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message:
      err.message || "Server Error",
  });
});

const PORT =
  process.env.PORT || 5005;
  
app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});