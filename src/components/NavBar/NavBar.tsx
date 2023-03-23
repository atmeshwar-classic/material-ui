import { AppBar, Box, Button, Toolbar, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <AppBar
      sx={{backgroundColor:'white', display: "flex", alignItems: "flex-end" }}
    >
      <Toolbar>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 100,
            marginRight: 2,
          }}
        >
          Sign In
        </Button>
        <Button
          variant="contained"
          sx={{
            borderRadius: 100,
          }}
          onClick={() => navigate('/page2')}
        >
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
