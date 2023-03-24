import { Route, Routes } from "react-router-dom";
import Login from "../screens/login";
import CardPage from "../screens/CardPage";
import ListPage from "../screens/ListPage";

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/card" element={<CardPage />} />
      <Route path="/list" element={<ListPage />} />
    </Routes>
  );
}

export default Router;
