import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import timeSlotsReducer from "./timeSlotsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    timeSlots: timeSlotsReducer,
  },
});

export default store;
