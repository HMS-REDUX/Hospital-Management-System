const AppointmentsModel = require("../models/appointmentsModel");

const AppointmentsController = {
  // Doctor sets available appointments
  async setAvailableAppointment(req, res) {
    const { doctor_id, appointment_date, appointment_time } = req.body;

    try {
      const newAppointment = await AppointmentsModel.setAvailableAppointment(
        doctor_id,
        appointment_date,
        appointment_time
      );

      return res.status(201).json({
        message: "Appointment slot set successfully",
        appointment: newAppointment,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error setting appointment slot",
        error: err.message,
      });
    }
  },
};

module.exports = AppointmentsController;
