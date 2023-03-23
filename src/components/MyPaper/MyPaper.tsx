import React from "react";
import Paper from "@mui/material/Paper";
type MyPaperType = {
  children: HTMLDivElement;
};
const MyPaper = ({ children }: MyPaperType) => {
  return <Paper>{children}</Paper>;
};

export default MyPaper;
