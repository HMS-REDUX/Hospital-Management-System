const express = require("express");
const cors = require("cors");
const pool = require("./congfig/db");
const authRoutes = require("./routes/doctorAuthRoutes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const authroutes = require("./routes/authRoutes");

// CORS configuration
const corsOptions = {
  origin: "http://localhost:5173", // Replace with the URL of your frontend
  credentials: true, // Allow cookies and other credentials
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", authroutes);
app.use("/api/doctorAuth", authRoutes);

// Routes

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
