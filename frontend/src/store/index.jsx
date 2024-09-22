import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import { thunk } from "redux-thunk";

import appointmentsReducer from './appointmentsSlice'; // Adjust the path as needed

const store = configureStore({
  reducer: {
    auth: authReducer,
    appointments: appointmentsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
