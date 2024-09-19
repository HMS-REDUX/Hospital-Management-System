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

  // Get all appointments by doctor_id
  async getAllAppointmentsByDoctorId(req, res) {
    const { doctor_id } = req.params;
    // The doctor_id must tak from the token

    try {
      const appointments = await AppointmentsModel.getAllAppointmentsByDoctorId(
        doctor_id
      );

      return res.status(200).json({
        appointments,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error getting appointments",
        error: err.message,
      });
    }
  },

  // Get all booked appointments by doctor_id
  async getBookedAppointments(req, res) {
    const { doctor_id } = req.params;

    try {
      const bookedAppointments = await AppointmentsModel.getBookedAppointments(
        doctor_id
      );

      return res.status(200).json({
        bookedAppointments,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error getting booked appoinments",
        error: error.message,
      });
    }
  },

  // Get availabel appointments by doctor_id
  async getAvailabelAppointments(req, res) {
    const { doctor_id } = req.params;

    try {
      const bookedAppointments =
        await AppointmentsModel.getAvailabelAppointments(doctor_id);

      return res.status(200).json({
        bookedAppointments,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error getting booked appoinments",
        error: error.message,
      });
    }
  },
};

module.exports = AppointmentsController;
