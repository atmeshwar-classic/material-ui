import styled from "@emotion/styled";
import {
  AppBar,
  AppBarProps,
  ButtonProps,
  Card,
  CardProps,
  Container,
  ContainerProps,
  Tabs,
  Typography,
  TypographyProps,
} from "@mui/material";
import { Button } from "@mui/material";
import { purple } from "@mui/material/colors";

export const appStyle = {
  a: {
    textDecoration: "none",
  },
  body: {
    margin: 0,
    height: "100vh",
    // background: "antiquewhite",
  },
};

export const navbarStyle = { background: "#311e1e" };

export const NavbarContainer = styled(AppBar)<AppBarProps>(() => ({
  color: "black",
  padding: "auto 30px",
  borderBottom: "5px solid #CCCCCC",
  boxShadow: "none",
  background: "white",
  ".MuiTypography-root": {
    padding: "4px 10px",
    color: "white!important",
    borderRadius: "20px",
    border: " 1px solid #6750A4",
  },
}));

export const ButtonWrapper = styled(Button)<
  ButtonProps & {
    background?: string;
    text_color?: string;
    width?: string;
    height?: string;
  }
>(({ theme, background, text_color, width, height }) => ({
  border: "1px solid #6750A4",
  padding: "auto 20px",
  borderRadius: "40px",
  width: width ? width : "inherit",
  height: height ? height : "inherit",
  color: text_color ? text_color : "",
  backgroundColor: background,
  "&:hover": {
    backgroundColor: purple[700],
    color: "white",
  },
}));

export const AppContainer = styled(Container)<
  ContainerProps & { marginTop?: string }
>(({ marginTop }) => ({
  marginTop: marginTop ? marginTop : "50px",
}));

export const CardWrapper = styled(Card)<CardProps>(() => ({
  borderRadius: "12px",
  border: "1px solid #CAC4D0",
  background: "#FFFBFE",
}));

export const FormContainer = styled("div")(() => ({
  width: "64%",
  margin: "auto",
  padding: "40px",
  background: "#FFFFFF",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  ".MuiFormControl-root": {
    marginTop: "20px",
    width: "100%",
  },
  ".agree_label": {
    ".MuiTypography-root": {
      fontSize: "12px!important",
      fontWeight: 500,
    },
  },

  ".MuiFormLabel-root": {
    color: "#1C1B1F!important",
  },
}));

export const Div = styled("div")<any>((props) => ({
  display: props.display ? props.display : "",
  justifyItems: props.justifyItems ? props.justifyItems : "",
  margin: props.margin ? props.margin : "",
  marginTop: props.marginTop ? props.marginTop : "",
  width: props.width ? props.width : "inherit",
  gap: props.gap ? props.gap : "",
  justifyContent: props.justifyContent ? props.justifyContent : "",
  alignItems: props.alignItems ? props.alignItems : "",
}));

export const TabsWrapper = styled(Tabs)({
  ".MuiTabs-flexContainer": {
    gap: "20px",
  },
  ".MuiButtonBase-root.Mui-selected": {
    color: "#1C1B1F",
    fontWeight: 700,
  },
  ".MuiButtonBase-root:active": {
    color: "#9c27b0",
  },
});

export const TypographyWrapper = styled(Typography)<
  TypographyProps & { text_color?: string }
>(({ text_color }) => ({
  color: text_color ? text_color : "",
}));
