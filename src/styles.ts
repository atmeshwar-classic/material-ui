import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import { AppBar, Button} from "@mui/material";
import Box from "@mui/material/Box";

export const AppbarStyles = styled(AppBar)({
  backgroundColor: "#FFFFFF",
});

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
  marginTop: "20px",
});

export const Page1Box = styled(Box)({
  display: "flex",
  marginLeft: 5,
});

export const Page2Card = styled(Card)({
  width: "500px",
  marginTop: "120px",
  padding: "5px 37px",
});

export const Page2Button = styled(Button)({
  display: "flex",
  marginLeft: "auto",
  borderRadius: "18px",
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
  borderRadius: "18px",
  marginRight: "3px",
  "&.alignButton": {
    marginLeft: "auto",
  },
});
