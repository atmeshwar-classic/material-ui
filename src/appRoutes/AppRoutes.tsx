import { Routes, Route } from "react-router-dom";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/0" element={<Page1 />} />
      <Route path="/1" element={<Page2 />} />
      <Route path="/2" element={<Page3 />} />
    </Routes>
  );
};

export default AppRoutes;
