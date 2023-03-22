import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Container } from "@mui/material";
import Header from "./components/header";
import { Page1 } from "./components/page1";
import { Page2 } from "./components/page2";
import Page3 from "./components/page3";
import { BrowserRouter, Routes, Route} from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      light: "#FFFFFF",
      main: "#6750A4",
      dark: "#503F7E",
      contrastText: "#21005D",
    },
  },
});


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      
      <Box>
        <Header />
        <Container sx={{ marginTop: 8 }}>
          <Routes>
          {['/', '/page1'].map(path => <Route path={path} element={<Page1 />} />)}
            <Route path="/page2" element={<Page2/>}/>
            <Route path="/page3" element={<Page3/>}/>
          </Routes>
        </Container>
      </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}
