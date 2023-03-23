import { Route, Routes } from "react-router-dom";
import Page1 from "../domains/page1/Page1";
import Page2 from "../domains/page2/Page2";
import Page3 from "../domains/page3/Page3";

const Routings = () => (
  <Routes>
    <Route path="/" element={<Page1 />} />
    <Route path="/page1" element={<Page1 />} />
    <Route path="/page2" element={<Page2 />} />
    <Route path="/page3" element={<Page3 />} />
  </Routes>
);

export default Routings;
