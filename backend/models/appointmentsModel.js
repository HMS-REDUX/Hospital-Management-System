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

  // Mthod to set multiple available time slots for a date
  async setAvailableTimeSlots(doctor_id, date, timeSlots) {
    const paramValues = timeSlots.flatMap((time, index) => [
      doctor_id,
      date,
      time,
    ]);
    const placeholders = timeSlots
      .map(
        (_, index) =>
          `($${index * 3 + 1}, $${index * 3 + 2}, $${index * 3 + 3})`
      )
      .join(", ");
    const query = `
    INSERT INTO Appointments (doctor_id, appointment_date, appointment_time)
    VALUES ${placeholders}
    RETURNING *;
  `;

    try {
      const result = await this.pool.query(query, paramValues);
      return result.rows;
    } catch (error) {
      console.error("Error in setAvailableTimeSlots:", error);
      throw error;
    }
  },

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

  // Get available dates for a doctor
  async getAvailableDates(doctor_id) {
    const query = `
      SELECT DISTINCT appointment_date
      FROM Appointments
      WHERE doctor_id = $1 AND istimeslotavailable = true
      ORDER BY appointment_date;
    `;

    const values = [doctor_id];

    try {
      const result = await pool.query(query, values);
      return result.rows.map((row) => row.appointment_date);
    } catch (err) {
      console.error("Error getting available dates:", err);
      throw err;
    }
  },

  // Get available times for a specific date and doctor
  async getAvailableTimesForDate(doctor_id, date) {
    const query = `
      SELECT appointment_time
      FROM Appointments
      WHERE doctor_id = $1 AND appointment_date = $2 AND istimeslotavailable = true
      ORDER BY appointment_time;
    `;
    const values = [doctor_id, date];

    try {
      const result = await pool.query(query, values);
      return result.rows;
    } catch (err) {
      console.error("Error getting available times for date:", err);
      throw err;
    }
  },

  // Cancel availabel appoinments
};

module.exports = AppointmentsModel;
