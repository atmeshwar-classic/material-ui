import React from "react";
import { Box } from "@mui/system";
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Grid, Stack } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { StyledButton } from "../common";

const StyledForm = styled(Stack)(() => ({
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    width:"50%",
    margin:"auto",
    padding:'30px'
}));

const Page2 =()=>{
    return <Box
    >
        <StyledForm spacing={3}>
            <TextField
                id="outlined"
                label="Label"
                helperText="Supporting text"
            />
            <TextField
                id="outlined"
                label="Label"
                helperText="Supporting text"
            />
            <FormControlLabel control={<Checkbox sx={{pl:0 , pr:1}} />} label=" I Agree" />
            <Stack direction="row" sx={{justifyContent:"end"}}>
                <StyledButton color="secondary" variant="contained">Sign up</StyledButton>
            </Stack>
        </StyledForm>
    </Box>
}
export default Page2;