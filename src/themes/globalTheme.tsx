import { createTheme, PaletteColor } from "@mui/material/styles";
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
          borderRadius: "50px",
          border: "1px solid #6750A4",
          fontFamily: "Roboto",
          padding: "0px 18px 0px 18px",
          "&.containedButton": {
            color: "#fff",
            backgroundColor: "#6750A4",
            "&:hover": {
              backgroundColor: "#21005D",
            },
          },
          "&.outlinedButton": {
            backgroundColor: "#fff",
            color: "#6750A4",
            "&:hover": {
              backgroundColor: "#fff",
            },
          },
        },
      },
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    // primary: Palette["primary"];
    primary: PaletteColor;
    secondary: PaletteColor;
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    primary?: PaletteOptions["primary"];
    secondary?: PaletteOptions["primary"];
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    primary: true;
  }
}
