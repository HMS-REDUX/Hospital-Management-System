import { configureStore } from "@reduxjs/toolkit";
import timeSlotsReducer from "./slices/timeSlotsSlice";
import authReducer from "./slices/authSlice";
import doctorAuthSlice from "./slices/doctorAuthSlice";
import doctorSlice from "./slices/doctorSlice";
import appointmentsReducer from "./slices/appointmentsSlice";
import doctorAppointment from "./slices/appointmentsDoctorSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    timeSlots: timeSlotsReducer,
    doctorAuth: doctorAuthSlice,
    doctor: doctorSlice,
    appointments: appointmentsReducer,
    appointmentsDoctor: doctorAppointment,
  },
});

export default store;
