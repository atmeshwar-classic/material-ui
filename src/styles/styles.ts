import { Card, Paper, CardActions, Box } from "@mui/material";
import styled from "@emotion/styled";

export const MyPaper = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  width: "700px",
  maxWidth: "700px",
});
export const MyCard = styled(Card)({
  maxWidth: 345,
  maxHeight: 440,
});
export const MyCardActions = styled(CardActions)({
  display: "flex",
  gap: "10px",
  justifyContent: "end",
});
export const MyBox = styled(Box)({
  pb: 7,
});
export const MyPage = styled(Box)({
  margin: "auto",
  width: "90vw",
  height: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
