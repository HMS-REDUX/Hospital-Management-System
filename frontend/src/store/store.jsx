import { configureStore } from "@reduxjs/toolkit";
import timeSlotsReducer from "./slices/timeSlotsSlice";
import authReducer from "./slices/authSlice";
import doctorAuthSlice from "./slices/doctorAuthSlice";
import doctorSlice from "./slices/doctorSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    timeSlots: timeSlotsReducer,
    doctorAuth: doctorAuthSlice,
    doctor: doctorSlice,
  },
});

export default store;
