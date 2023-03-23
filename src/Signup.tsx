import React from "react";
import {
  AppContainer,
  ButtonWrapper,
  Div,
  FormContainer,
} from "./globalStyles";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";

const Signup = () => {
  return (
    <AppContainer marginTop="100px">
      <FormContainer>
        <Typography variant="h5">Login</Typography>
        <FormControl>
          <TextField
            fullWidth
            required
            id="outlined-error"
            label="Email"
            helperText="Supporting text."
          />
          <TextField
            fullWidth
            required
            id="outlined-error"
            label="Password"
            helperText="Supporting text."
          />
          <FormControlLabel
            className="agree_label"
            sx={{ marginTop: 3 }}
            control={<Checkbox defaultChecked />}
            label="I Agree"
          />
          <Div display="grid" justifyItems="end" marginTop="30px">
            <ButtonWrapper
              width="100px"
              height="45px"
              background="#503F7E"
              variant="outlined"
              text_color="#FFFFFF">
              Signup
            </ButtonWrapper>
          </Div>
        </FormControl>
      </FormContainer>
    </AppContainer>
  );
};

export default Signup;
