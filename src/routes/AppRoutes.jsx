import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import FindDoctors from "../pages/FindDoctors";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/find-doctors" element={<FindDoctors />} />
    </Routes>
  );
};

export default AppRoutes;
