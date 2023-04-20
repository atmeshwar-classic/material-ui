
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = (mode:string) =>
  createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: "#503F7E",
      },
      secondary: {
        main:"#FFFBFE",
      },
      text: {
        primary: "#CAC4D0",
        secondary: "#49454F",
      },
      common:{
        black:"#000",
        white:"#fff",
      },
      tonalOffset: 0.2
    },
    // status:{
    //   danger:"#ffff"
    // },
    components:{
      MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            fontWeight: '500',
            textTransform:"none"
          },
        },
      },
    }
  });

export default theme;