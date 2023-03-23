import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
export const myTheme = createTheme({
  palette: {
    primary: {
      main: "#6750A4",
      dark: "#21005D",
    },
    secondary: {
      main: blue[500],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        //   border: ` 3px solid ${palette.primary.main}`,
          borderRadius: "50px",
          fontFamily: "Roboto",
        },
      },
    },
  },
});
