import React from "react";
import {
  Container,
  Paper,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { ContainedButton } from "./buttons";
export const Page2 = () => {
  return (
    <Container sx={{display:'flex',justifyContent:'center'}}>
      <Paper elevation={3} >
        <Box sx={{ padding: 4 ,display:'flex' , flexDirection:'column'}}>

          <Typography variant="h6">Heading</Typography>

          <FormControl sx={{ marginY: 3 ,width:500}}>
            <InputLabel>Label one</InputLabel>
            <OutlinedInput
              type="text"
              defaultValue="Input one"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <CancelOutlinedIcon />
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <FormControl sx={{ marginY: 3 ,width:500 }}>
            <InputLabel>Label two</InputLabel>
            <OutlinedInput
              type="text"
              defaultValue="Input two"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton>
                    <CancelOutlinedIcon />
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <FormControlLabel
            control={<Checkbox size="small" />}
            label={<Typography sx={{ fontSize: 10 }}>I Agree</Typography>}
            labelPlacement="end"
          />

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <ContainedButton>Sign Up</ContainedButton>
          </Box>

        </Box>
      </Paper>
    </Container>
  );
};
