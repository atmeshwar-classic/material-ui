import Button from "@mui/material/Button";

type ButtonType = {
  children: string;
  sx?: object;
};

const MyCommonButton = ({ children, sx }: ButtonType) => {
  return <Button sx={sx}>{children}</Button>;
};

export default MyCommonButton;
