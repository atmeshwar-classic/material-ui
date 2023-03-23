import {
  AppBar,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CancelIcon from "@mui/icons-material/Cancel";
import { Page2Button, Page2Card } from "./styles";

export const Page2 = () => {
  return (
    <>
      <Box
        component={Grid}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Page2Card>
          <CardContent>
            <Typography variant="h5" sx={{ paddingBottom: 5 }}>
              Heading
            </Typography>
            <FormControl
              fullWidth
              sx={{
                boxShadow: "0 4 4 rgba(0, 0, 0, 0.25)",
              }}
            >
              <InputLabel
                htmlFor="outlined-adornment-amount"
                sx={{ fontSize: 12, color: "#49454F" }}
              >
                Amount*
              </InputLabel>

              <OutlinedInput
                label="Amount"
                endAdornment={
                  <InputAdornment position="end">
                    <CancelIcon></CancelIcon>
                  </InputAdornment>
                }
                sx={{ height: 45, width: "100%" }}
              />
              <FormHelperText sx={{ paddingBottom: 2 }}>
                Supporting Text
              </FormHelperText>
            </FormControl>
            <FormControl fullWidth sx={{}}>
              <InputLabel
                htmlFor="outlined-adornment-amount"
                sx={{ fontSize: 12, color: "#49454F" }}
              >
                Amount*
              </InputLabel>
              <OutlinedInput
                label="Amount"
                endAdornment={
                  <InputAdornment position="end">
                    <CancelIcon></CancelIcon>
                  </InputAdornment>
                }
                sx={{ height: 45, width: "100%" }}
              />
              <FormHelperText sx={{ paddingBottom: 2 }}>
                Supporting Text
              </FormHelperText>
            </FormControl>

            <FormControlLabel
              control={<Checkbox />}
              label="I Agree"
              className="labelstyle"
            />

            <Page2Button variant="contained">Signup</Page2Button>
          </CardContent>
        </Page2Card>
      </Box>
    </>
  );
};
