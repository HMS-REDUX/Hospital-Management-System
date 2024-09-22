const express = require("express");
const cors = require("cors");
const pool = require("./congfig/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const authroutes = require("./routes/authRoutes");



/////////////////////////////////Admin////////////////////////////////////////////////
const userRoutesAdmin = require("./routes/userRoutesAdmin"); // Add this line
const doctorRoutesAdmin = require("./routes/doctorRoutesAdmin"); // Import the new route
const appointmentRoutesAdmin = require("./routes/appointmentRoutesAdmin"); // Import appointment routes
const contactRoutesAdmin = require("./routes/contactRoutesAdmin"); // Add this line
/////////////////////////////////////////////////////////////////////////////////////



// CORS configuration
const corsOptions = {
  origin: "http://localhost:5173", // Replace with the URL of your frontend
  credentials: true, // Allow cookies and other credentials
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", authroutes);



/////////////////////////////////Admin////////////////////////////////////////////////
app.use("/api", userRoutesAdmin); // Add the user routes here
app.use("/api", doctorRoutesAdmin); // Use the new route here
app.use("/api", appointmentRoutesAdmin); // Use the appointment routes
app.use("/api", contactRoutesAdmin); // Add the contact routes here
/////////////////////////////////////////////////////////////////////////////////////




app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
