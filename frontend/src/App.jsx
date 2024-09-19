import "./App.css";
import { Routes, Route } from "react-router-dom"; // No need to import BrowserRouter here

import Login from "./pages/login";
import Register from "./pages/Register";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
