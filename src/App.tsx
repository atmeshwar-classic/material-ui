import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import "./App.css";
import { appStyle } from "./globalStyles";
import { GlobalStyles } from "@mui/material";
import Home from "./Home";
import Signup from "./Signup";
import ProductsTab from './ProductsTab/ProductsTab';

export default function App() {
  return (
    <>
      <GlobalStyles styles={appStyle} />
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="products" element={<ProductsTab />} />
      </Routes>
    </>
  );
}
