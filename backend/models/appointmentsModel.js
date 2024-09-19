const pool = require("../config/db");

const AppointmentsModel = {
  // Doctor sets available appointments (date and time)
  async setAvailableAppointment(doctor_id, appointment_date, appointment_time) {
    const query = `
      INSERT INTO Appointments (doctor_id, appointment_date, appointment_time)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [doctor_id, appointment_date, appointment_time];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (err) {
      console.error("Error setting available appointment:", err);
      throw err;
    }
  },

  // Get all appointments by doctor_id
  async getAllAppointmentsByDoctorId(doctor_id) {
    const query = `
      SELECT * FROM Appointments
      WHERE doctor_id = $1;
    `;
    const values = [doctor_id];
    try {
      const result = await pool.query(query, values);
      return result.rows;
    } catch (err) {
      console.error("Error getting appointments by doctor_id:", err);
      throw err;
    }
  },

  // Get  booked appointments by doctor_id
  async getBookedAppointments(doctor_id) {
    const query = `
    SELECT * FROM Appointments WHERE doctor_id = $1 AND istimeslotavailable = false;
    `;
    const values = [doctor_id];
    try {
      const result = await pool.query(query, values);
      return result.rows;
    } catch (error) {
      console.error("Error getting booked appointments ");
      throw error;
    }
  },

  // Get availabel appointments by doctor_id
  async getAvailabelAppointments(doctor_id) {
    const query = `
    SELECT * FROM Appointments WHERE doctor_id = $1 AND istimeslotavailable = true;
    `;
    const values = [doctor_id];
    try {
      const result = await pool.query(query, values);
      return result.rows;
    } catch (error) {
      console.error("Error getting booked appointments ");
      throw error;
    }
  },

  // Cancel availabel appoinments
};

module.exports = AppointmentsModel;
