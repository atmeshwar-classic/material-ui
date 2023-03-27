import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { myTheme } from "../../themes/globalTheme";

const pages = ["SignUp", "SignIn"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor:'neutral.main' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: `${myTheme.palette.primary.main}` }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              flexDirection: "row-reverse",
              gap: "5px",
            }}
          >
            <Button variant="contained">Sign Up</Button>
            <Button variant="outlined">Sign In</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
