import { Link } from "react-router-dom";
import { Box, AppBar, Toolbar, Button } from "@mui/material";
import React from "react";

const Navbar = () => {
  const style = {
    btnPrimary: {
      margin: "0px 10px",
      borderRadius: "100px",
      width: "100px",
      height: "40px",
      fontSize: "12px",
    },
    linkStyle:{
      textDecoration:"none"
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ background: "none" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box>
            <Button sx={style.btnPrimary} color='primary' variant='text'>
              <Link style={style.linkStyle} to='/cards'>Mui Cards</Link>
            </Button>
            <Button sx={style.btnPrimary} color='primary' variant='text'>
              <Link  style={style.linkStyle} to='/form'>Mui Form</Link>
            </Button>
            <Button sx={style.btnPrimary} color='primary' variant='text'>
              <Link style={style.linkStyle} to='/tabs'>Mui Tabs</Link>
            </Button>
          </Box>
          <Box>
            <Button sx={style.btnPrimary} color='primary' variant='outlined'>
              Signup
            </Button>
            <Button sx={style.btnPrimary} color='primary' variant='contained'>
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
