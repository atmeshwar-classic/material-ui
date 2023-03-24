import { Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ButtonFilled, ButtonHollow, StyledAppBar } from "../../Styles/style";

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <StyledAppBar>
      <Toolbar>
        <ButtonHollow>Sign In</ButtonHollow>
        <ButtonFilled onClick={() => navigate('/page1')}>Sign Up</ButtonFilled>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavBar;
