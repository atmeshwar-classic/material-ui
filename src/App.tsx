import { Box, Container } from "@mui/material";
import NavBar from "./components/NavBar/NavBar";
import Routings from "./routes/routes";

export default function App() {
  return (
    <Box>
      <NavBar />
      <Container sx={{marginY:10, right:0}}>
        <Routings />
      </Container>
    </Box>
  );
}
