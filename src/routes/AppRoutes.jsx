import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import FindDoctors from "../pages/FindDoctors";
import Specialities from "../pages/Specialities";
import Hospitals from "../pages/Hospitals";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/find-doctors" element={<FindDoctors />} />
      <Route path="/hospitals" element={<Hospitals />} />
      <Route path="/specialities" element={<Specialities />} />
    </Routes>
  );
};

export default AppRoutes;
