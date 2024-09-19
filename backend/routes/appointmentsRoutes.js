const express = require("express");
const router = express.Router();
const AppointmentsController = require("../controllers/appointmentsController");

// Route to set available appointment slots (Doctor)
router.post("/available", AppointmentsController.setAvailableAppointment);

// Route to get all appointments by doctor ID
router.get(
  "/all/doctor/:doctor_id",
  AppointmentsController.getAllAppointmentsByDoctorId
);

// Route to get booked appointments by doctor ID
router.get(
  "/booked/doctor/:doctor_id",
  AppointmentsController.getBookedAppointments
);

// Route to get availabel appointments by doctor ID
router.get(
  "/availabel/doctor/:doctor_id",
  AppointmentsController.getAvailabelAppointments
);

module.exports = router;
