import { Divider, Grid } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";

export default function NavBar() {
  const buttonStyles = {
    m: 1,
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="right"
        alignItems="center"
      >
        <CustomButton
          sx={buttonStyles}
          variant="outlined"
          color="secondary"
          disabled={false}
        >
          Sign In
        </CustomButton>
        <CustomButton
          sx={buttonStyles}
          variant="contained"
          color="primary"
          disabled={false}
        >
          Sign Up
        </CustomButton>
      </Grid>
      <Divider variant="fullWidth" sx={{ border: "4" }} />
    </>
  );
}
