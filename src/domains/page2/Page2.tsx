import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import {
  Button,
  Checkbox,
  FormControl,
  FormGroup,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography
} from "@mui/material";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import React from "react";
import { StyledButtonFilled } from "../../Styles/style";

const Page2: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginTop: 20,
      }}
    >
      <Paper elevation={3} sx={{ width: 800, height: 500 }}>
        <Box sx={{ padding: 5 }}>
          <Box>
            <Typography variant="h4" component="h2">
              Heading
            </Typography>
          </Box>
          <Box sx={{ width: 700, marginY: 2 }}>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-label">label</InputLabel>
              <OutlinedInput
                id="outlined-adornment-label"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <CancelOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                }
                label="Input"
              />
              <FormHelperText id="helper-text">Supporting text</FormHelperText>
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel htmlFor="outlined-adornment-label">label</InputLabel>
              <OutlinedInput
                id="outlined-adornment-label"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <CancelOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                }
                label="Input"
              />
              <FormHelperText id="helper-text">Supporting text</FormHelperText>
            </FormControl>
          </Box>
          <Box sx={{ marginY: 2 }}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="I Agree"
                className="labelstyle"
              />
            </FormGroup>
          </Box>
          <Box display="flex" sx={{ justifyContent: "flex-end", marginY: 2 }}>
            <StyledButtonFilled>Sign Up</StyledButtonFilled>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Page2;
