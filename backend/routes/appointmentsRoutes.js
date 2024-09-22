const express = require("express");
const router = express.Router();
const AppointmentsController = require("../controllers/appointmentsController");

// Route to set available appointment slots (Doctor)
router.post("/set-available", AppointmentsController.setAvailableAppointment);

// POST route to set available time slots for a doctor
router.post("/set-slots", AppointmentsController.setAvailableTimeSlots);

// Route to get all appointments by doctor ID
router.get("/:doctor_id", AppointmentsController.getAllAppointmentsByDoctorId);

// Route to get booked appointments by doctor ID
router.get("/:doctor_id/booked", AppointmentsController.getBookedAppointments);

// Route to get availabel appointments by doctor ID
router.get(
  "/availabel/doctor/:doctor_id",
  AppointmentsController.getAvailabelAppointments
);

// Get available dates for a doctor
router.get("/:doctor_id/dates", AppointmentsController.getAvailableDates);

module.exports = router;
