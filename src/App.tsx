import { Box, Container } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import Router from "./routes/routes";

export default function App() {
  return (
    <Box>
      <NavBar />
      <Container sx={{marginY:10, right:0}}>
        <Router />
      </Container>
    </Box>
  );
}
