import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import FindDoctors from "../pages/FindDoctors";
import Specialities from "../pages/Specialities";
import Hospitals from "../pages/Hospitals";
import ForDoctors from "../pages/fordoctors";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cardiology from "../features/Cardiology";
import Neurology from "../features/Neurology";
import Pediatrics from "../features/Pediatrics";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/find-doctors" element={<FindDoctors />} />
      <Route path="/hospitals" element={<Hospitals />} />
      <Route path="/specialities" element={<Specialities />} />
      <Route path="/for-doctor" element={<ForDoctors />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cardiology" element={<Cardiology />} />
      <Route path="/Neurology" element={<Neurology />} />
      <Route path="/Pediatrics" element={<Pediatrics />} />
    </Routes>
  );
};

export default AppRoutes;
