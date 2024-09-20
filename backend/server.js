const express = require("express");
const cors = require("cors");
const pool = require("./config/db");
const doctorAuthRoutes = require("./routes/doctorAuthRoutes");
const authroutes = require("./routes/authRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const cookieParser = require("cookie-parser");
const appointmentsRoutes = require("./routes/appointmentsRoutes");

require("dotenv").config();
const doctorcatalogRoutes = require("./routes/doctorscatalogRoutes");
const app = express();
const PORT = process.env.PORT;

// End points routes

// CORS configuration
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Use routes
app.use("/api/auth", authroutes);

app.use("/api", doctorcatalogRoutes);

app.use("/api/appointments", appointmentsRoutes);
app.use("/api/auth", authroutes);
app.use("/api/doctorAuth", doctorAuthRoutes);
app.use("/api/doctors", doctorRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
