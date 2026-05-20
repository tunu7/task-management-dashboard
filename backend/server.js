const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

// Load ENV Variables
dotenv.config();

// Connect Database
connectDB();

const app = express();


// Middlewares
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


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


// 404 Route Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});


// Server
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});