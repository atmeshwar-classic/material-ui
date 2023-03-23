import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import { AppBar, Button, Divider, IconButton, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";

export const Page1Card = styled(Card)({
  maxWidth: "250px",
  marginTop: "100px",
  marginRight: "40px",
  border: "1px solid #CAC4D0",
  borderRadius: "12px",
});

export const Page1Button = styled(Button)({
  borderRadius: "18px",
  marginLeft: "auto",
  height: "30px",
  marginTop: "20px",
  fontSize: "10px",
  "&.contained": {
    backgroundColor: "#6750A4",
  },
});

export const Page2Card = styled(Card)({
  width: "500px",
  marginTop: "120px",
  padding: "5px 37px",
});

export const Page2Button = styled(Button)({
  display: "flex",
  marginLeft: "auto",
  height: "30px",
  background: "#6750A4",
  borderRadius: "18px",
  fontSize: "10px",
});

export const ListItemBox = styled(Box)({
  width: "100%",
  maxWidth: 360,
  marginTop: "70px",
});

export const TabBox = styled(Box)({
  paddingLeft: "35px",
});

export const NavigationBarButton = styled(Button)({
  height: "30px",
  borderRadius: "18px",
//   background: "#6750A4",
  fontSize: "10px",
  marginRight:"3px",
  "&.containedButton": {
    backgroundColor: "#6750A4",
  },
  "&.outlinedButton": {
marginLeft:"auto"
  }
});
