import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import FindDoctors from "../pages/FindDoctors";
import Specialities from "../pages/Specialities";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/find-doctors" element={<FindDoctors />} />
      <Route path="/specialities" element={<Specialities />} />
    </Routes>
  );
};

export default AppRoutes;
