import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import DoctorProfilePage from "./pages/Doctor Profile/DoctorProfilePage";
import DoctorAppointmentSetter from "./pages/Doctor Profile/DoctorAppointmentSetter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctor-profile" element={<DoctorProfilePage />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/calendar" element={<DoctorAppointmentSetter />} />
    </Routes>
  );
}

export default App;
