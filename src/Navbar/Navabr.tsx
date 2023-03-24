import React from "react";
import { StyledButton ,StyledToolbar} from "../common";
import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box';
const Navbar = ()=>{
    return (
    <StyledToolbar >
        <Stack direction="row" spacing={2}>
            <StyledButton color="secondary" variant="outlined" >Sign In</StyledButton>
            <StyledButton color="secondary" variant="contained">Sign Up</StyledButton>
        </Stack>
    </StyledToolbar >
    );
}
export default Navbar