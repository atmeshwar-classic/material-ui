import { Divider, Grid } from "@mui/material";
import styled from "@emotion/styled";
import CustomButton from "../CustomButton/CustomButton";

const StyledGrid = styled(Grid)`
  display: flex;
  direction: row;
  justify-content: right;
  align-items: center;
`;

export default function NavBar() {
  const buttonStyles = {
    m: 1,
  };

  return (
    <>
      <StyledGrid>
        <CustomButton sx={buttonStyles} variant="outlined" color="secondary">
          Sign In
        </CustomButton>
        <CustomButton sx={buttonStyles} variant="contained" color="primary">
          Sign Up
        </CustomButton>
      </StyledGrid>
      <Divider variant="fullWidth" sx={{ border: "4" }} />
    </>
  );
}
