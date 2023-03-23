import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ButtonWrapper, Div, NavbarContainer } from "./globalStyles";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <NavbarContainer position="static">
      <Toolbar>
        <Div display="flex" width="-webkit-fill-available" gap="20px">
          <Typography variant="h6" component="div">
            <Link to="/">Home</Link>
          </Typography>
          <Typography variant="h6" component="div">
            <Link to="/products">Products</Link>
          </Typography>
        </Div>
        <ButtonWrapper
          sx={{ marginRight: 2 }}
          background="#fffff"
          onClick={() => navigate("/signup")}
          variant="outlined"
          text_color="#6750A4">
          Login
        </ButtonWrapper>
        <ButtonWrapper
          background="#503F7E"
          variant="outlined"
          onClick={() => navigate("/signup")}
          text_color="#FFFFFF">
          Signup
        </ButtonWrapper>
      </Toolbar>
    </NavbarContainer>
  );
}
