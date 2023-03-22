import { useTheme } from "@mui/material";
import Button from "@mui/material/Button";

export const OutlinedButton = (props: any) => {
  const theme = useTheme();
  return (
    <Button
      variant="outlined"
      sx={{
        color: theme.palette.primary.main,
        border: "1px solid #000000",
        borderRadius: 100,
        padding: "5px 14px",
        fontSize: 14,
        textTransform: 'none',
        marginRight: 1,
      }}
    >
      {props.children}
    </Button>
  );
};

export const ContainedButton = (props: any) => {
  const theme = useTheme();
  return (
    <Button
      variant="contained"
      sx={{
        color: theme.palette.primary.light,
        backgroundColor: theme.palette.primary.dark,
        border: "1px solid #000000",
        borderRadius: 100,
        padding: "5px 14px",
        textTransform: 'none',
        fontSize: 14,
      }}
    >
      {props.children}
    </Button>
  );
};
