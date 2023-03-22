import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { ContainedButton, OutlinedButton } from "./buttons";

const Header = () => {
  return (
    <>
      <div>Header</div>
      <AppBar  sx={{ backgroundColor: "white" ,display:'flex',alignItems:"flex-end"}}>
        <Toolbar>
          <OutlinedButton>
            Sign In
          </OutlinedButton>

          <ContainedButton>
            Sign Up
          </ContainedButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
