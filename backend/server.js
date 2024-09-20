const express = require("express");
const cors = require("cors");
const pool = require("./config/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

// End points routes
const authroutes = require("./routes/authRoutes");
const appointmentsRoutes = require("./routes/appointmentsRoutes");

// CORS configuration
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Use routes
app.use("/api/auth", authroutes);
app.use("/api/appointments", appointmentsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
