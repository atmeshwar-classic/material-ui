import { createTheme } from "@mui/material/styles";

// main: "#6750A4",
export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#503F7E",
      light:"#EADDFF",
      dark:"#21005D",
    },
    secondary: {
      main: "#625B71",
      light:"#E8DEF8",
      dark:"#1D192B",
    },
    error: {
      main:"#B3261E",
      light:"#F9DEDC",
      dark:"#410E0B",
    }
  },
  typography: {
    h5: {
      fontSize: "25px",
    },
  },
});
