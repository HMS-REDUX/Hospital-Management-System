const express = require("express");
const cors = require("cors");
const pool = require("./config/db");
const doctorAuthRoutes = require("./routes/doctorAuthRoutes");
const authroutes = require("./routes/authRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const cookieParser = require("cookie-parser");
const appointmentsRoutes = require("./routes/appointmentsRoutes");
/////////////////////////////////Admin////////////////////////////////////////////////
const userRoutesAdmin = require("./routes/userRoutesAdmin"); // Add this line
const doctorRoutesAdmin = require("./routes/doctorRoutesAdmin"); // Import the new route
// const appointmentRoutesAdmin = require("./routes/appointmentRoutesAdmin"); // Import appointment routes
const contactRoutesAdmin = require("./routes/contactRoutesAdmin"); // Add this line
/////////////////////////////////////////////////////////////////////////////////////
const userProfileRoutes = require("./routes/userProfileRoutes");
const contactRoutes = require("./routes/contactRoutes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

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
app.use("/api/appointments", appointmentsRoutes);
app.use("/api/auth", authroutes);
app.use("/api/doctorAuth", doctorAuthRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/user", userProfileRoutes);
app.use('/api/contacts', contactRoutes);



/////////////////////////////////Admin////////////////////////////////////////////////
app.use("/api", userRoutesAdmin); // Add the user routes here
app.use("/api", doctorRoutesAdmin); // Use the new route here
// app.use("/api", appointmentRoutesAdmin); // Use the appointment routes
app.use("/api", contactRoutesAdmin); // Add the contact routes here
/////////////////////////////////////////////////////////////////////////////////////




app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
