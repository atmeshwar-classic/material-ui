import { Route, Routes } from "react-router-dom";
import HomePage from "../domains/homePage/HomePage";
import Page1 from "../domains/page1/Page1";
import Page2 from "../domains/page2/Page2";
import Page3 from "../domains/page3/Page3";

const Router = () => (
  <Routes>
    <Route path="/" element={<HomePage />}>
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
    </Route>
  </Routes>
);

export default Router;
