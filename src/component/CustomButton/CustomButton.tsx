import React from "react";
import Button from "@mui/material/Button";
import { SxProps } from "@mui/material";

interface Props {
  children?: React.ReactNode;
  variant?: "text" | "outlined" | "contained";
  sx?: SxProps;
  color:
    | "primary"
    | "secondary"
    | undefined;
}

const CustomButton: React.FC<Props> = ({
  children,
  variant,
  sx,
  color,
}) => {
  return (
    <Button color={color} variant={variant} sx={sx} style={{borderRadius: 20, fontSize: 13}}>
      {children}
    </Button>
  );
};

export default CustomButton;
