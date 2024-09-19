const express = require("express");
const router = express.Router();
const AppointmentsController = require("../controllers/appointmentsController");

// Route to set available appointment slots (Doctor)
router.post("/available", AppointmentsController.setAvailableAppointment);

module.exports = router;
