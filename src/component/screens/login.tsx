import {
  Container,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
  Paper,
  Grid,
} from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const Login = (): JSX.Element => {
  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={4}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            padding: 4,
          }}
        >
          <Typography variant="h5" style={{ marginBottom: 20 }}>
            Heading
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoFocus
            id="email"
            helperText="Please Enter Email Address"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <CancelOutlinedIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            helperText="Please Enter Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <CancelOutlinedIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="I Agree"
          />
          <Grid
            container
            direction="row"
            justifyContent="right"
            alignItems="center"
            pt={5}
          >
            <CustomButton
              color="primary"
              variant="contained"
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                outerWidth: 5,
              }}
            >
              Sign Up
            </CustomButton>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
