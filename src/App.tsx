import HomePage from './Home/Home';
import Navbar from './Navbar/Navabr';
import Page2 from './Page2/Page2';
import Page3 from './Page3/Page3';
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div>
       <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}>
              <Route index element={<HomePage />} />
              <Route path="Page2" element={<Page2 />} />
              <Route path="Page3" element={<Page3 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  )
}