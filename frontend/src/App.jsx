import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your pages/components
import Home from "./pages/home";
// import DoctorProfilePage from "./pages/DoctorProfilePage";
import DoctorProfilePage from "./pages/Doctor Profile/DoctorProfilePage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor-profile" element={<DoctorProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
