import Button from "@mui/material/Button";

type ButtonType = {
  children: string;
  sx?: object;
  variant: "text" | "outlined" | "contained" | undefined;
};

const MyCommonButton = ({ children, sx, variant }: ButtonType) => {
  return (
    <Button sx={sx} variant={variant}>
      {children}
    </Button>
  );
};

export default MyCommonButton;
