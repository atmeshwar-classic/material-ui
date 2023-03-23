import AppRoutes from "./appRoutes/AppRoutes";
import BottomNav from "./components/BottomNav/BottomNav";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <BottomNav />
    </>
  );
}
