import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import DoctorProfilePage from "./pages/Doctor Profile/DoctorProfilePage";
import DoctorAppointmentSetter from "./pages/Doctor Profile/DoctorAppointmentSetter";
import DoctorLogin from "./pages/DoctorLogin";
import UserProfile from "./pages/User Profile/UserProfile";
import ContactUs from "./pages/ContactUs";
///////////////////////Admin///////////////////////////////////
import HomePage from "./pages/AdminDashboard/HomePage";
import PatientRecords from './pages/AdminDashboard/PatientRecords';
import Doctors from "./pages/AdminDashboard/Doctors";
import Stats from './pages/AdminDashboard/Stats';
// import Appointments from "./pages/AdminDashboard/Appointments";
import Messages from "./pages/AdminDashboard/Messages";
import AboutUs from "./pages/AboutUs";
///////////////////////////////////////////////////////////////

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctor-profile" element={<DoctorProfilePage />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />




                       {/* Admin Dashbord */}

      <Route path="/admin" element={<HomePage />}>
          <Route index element={<Stats />} />
          <Route path="patient-records" element={<PatientRecords />} />
          <Route path="doctors" element={<Doctors />} />
          {/* <Route path="appointments" element={<Appointments />} /> */}
          <Route path="messages" element={<Messages/>} />
      </Route>

                      {/* Admin Dashbord */}






      <Route path="/calendar" element={<DoctorAppointmentSetter />} />
      <Route path="/doctorLogin" element={<DoctorLogin />} />
      <Route path="/userprofile" element={<UserProfile/>} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/aboutus" element={<AboutUs/>} />
    </Routes>
  );
}

export default App;
