import styled from "@emotion/styled";
import { Padding } from "@mui/icons-material";
import { AppBar, Button, Card } from "@mui/material";

export const ButtonHollow = styled(Button)({
  border: "2px solid",
  borderRadius: "30px",
  borderColor: "#EADDFF",
  marginRight: "5px",
  padding: "5px",
});

export const ButtonFilled = styled(Button)({
  backgroundColor: "#6750A4",
  color: "#FFFFFF",
  borderRadius: "30px",
  marginRight: "5px",
  padding: "10px",
  "&:hover": {
    backgroundColor: "#FFFFFF",
    color: "#6750A4",
    border: "2px solid",
    borderRadius: "30px",
    borderColor: "#EADDFF",
  },
});

export const StyledCard = styled(Card)({
  maxWidth: "780px",
  marginBottom: "10px",
  borderRadius: "10px",
  borderColor: "#EADDFF",
});

export const StyledAppBar = styled(AppBar)({
  backgroundColor: "white",
  display: "flex",
  alignItems: "flex-end",
});
