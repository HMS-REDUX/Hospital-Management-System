import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import doctorAuthSlice from "./slices/doctorAuthSlice";
import doctorSlice from "./slices/doctorSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    doctorAuth: doctorAuthSlice,
    doctor: doctorSlice,
  },
});

export default store;
