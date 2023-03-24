import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./component/CustomTheme";
import NavBar from "./component/NavBar/NavBar";
import Router from "./component/router/Router";
import CustomTab from "./component/CustomTab/CustomTab";

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <NavBar />
      <Router />
    </ThemeProvider>
  );
}
