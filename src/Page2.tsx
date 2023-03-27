import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CancelIcon from "@mui/icons-material/Cancel";
import { Page2Button, Page2Card } from "./styles";
import { ThemeProvider } from "@mui/material/styles";
import { palatteTheme } from "./themes";

export const Page2 = () => {
  return (
    <>
        <ThemeProvider theme={palatteTheme}>
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
            {[...Array(2).keys()].map((item)=> (
               <FormControl
               fullWidth
             >
               <InputLabel
                 htmlFor="outlined-adornment-amount"
               >
                 Amount*
               </InputLabel>
 
               <OutlinedInput
                 label="Amount"
                 endAdornment={
                   <InputAdornment position="end">
                     <IconButton> <CancelIcon /></IconButton>
                   </InputAdornment>
                 }
                 sx={{ height: 45}}
               />
               <FormHelperText sx={{ paddingBottom: 2 }}>
                 Supporting Text
               </FormHelperText>
             </FormControl>
            ))}
            <FormControlLabel
              control={<Checkbox defaultChecked/>}
              label="I Agree"
              className="labelstyle"
            />

            <Page2Button variant="contained">Signup</Page2Button>
          </CardContent>
        </Page2Card>
      </Box>
      </ThemeProvider>
    </>
  );
};
