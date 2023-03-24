import { AppBar, Box, Button, Toolbar, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  StyledAppBar, StyledButtonFilled,
  StyledButtonHollow
} from "../../Styles/style";

const NavBar: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <StyledAppBar>
      <Toolbar>
        <StyledButtonHollow>Sign In</StyledButtonHollow>
        <StyledButtonFilled onClick={() => navigate('/page1')}>Sign Up</StyledButtonFilled>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavBar;
