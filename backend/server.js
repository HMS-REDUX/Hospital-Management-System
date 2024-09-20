const express = require("express");
const cors = require("cors");
const pool = require("./congfig/db");
const doctorAuthRoutes = require("./routes/doctorAuthRoutes");
const authroutes = require("./routes/authRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

// CORS configuration
const corsOptions = {
  origin: "http://localhost:5173", // Replace with the URL of your frontend
  credentials: true, // Allow cookies and other credentials
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authroutes);
app.use("/api/doctorAuth", doctorAuthRoutes);
app.use("/api/doctors", doctorRoutes);

// Routes

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
