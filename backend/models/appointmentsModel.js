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
};

module.exports = AppointmentsModel;
