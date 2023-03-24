import React from "react";
import Button from "@mui/material/Button";

interface Props {
  children?: React.ReactNode;
  variant?: "text" | "outlined" | "contained";
  sx?: object;
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  disabled: boolean;
}

const CustomButton: React.FC<Props> = ({
  children,
  variant,
  sx,
  color,
  disabled,
}) => {
  return (
    <Button color={color} disabled={disabled} variant={variant} sx={sx} style={{borderRadius: 20, fontSize: 13}}>
      {children}
    </Button>
  );
};

export default CustomButton;
