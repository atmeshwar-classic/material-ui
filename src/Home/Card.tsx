import React from "react";
import {Box} from "@mui/material";
import { ICard } from "../common";
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Grid, Stack } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import media from '../assets/media.png';
import { StyledButton } from "../common";
interface CardProps {
    card:ICard
}

const StyledCard = styled(Box)(() => ({
    border: '1px solid #CAC4D0',
    borderRadius:"12px",
    
  }));
  
  
const Card = (props:CardProps)=>{
    const {text,title,subHeader,header} = props.card
    return <Grid item sm={6} md={4} lg={3}>
        <StyledCard>
            <Grid container p={1}>
                <Grid item sm={2}>
                    <Avatar sx={{ bgcolor: '#503F7E' }}>A</Avatar>
                </Grid>
                <Grid item sm='auto'>
                    <Typography fontWeight='bold'>{header}</Typography>
                    <Typography>{subHeader}</Typography>
                </Grid>
                <Grid item sm={2}></Grid>
            </Grid>
            <img src={media} style={{width:"100%"}}></img>
            <Box p={1}>
            <Typography fontWeight={600}>{title}</Typography>
            <Typography>{subHeader}</Typography>
            <Typography>{text}</Typography>
            </Box>
            <Stack direction="row" spacing={1} p={1} sx={{justifyContent:"end"}}>
                <StyledButton color="secondary" variant="outlined">Enabled</StyledButton>
                <StyledButton color="secondary" variant="contained">Enabled</StyledButton>
            </Stack>
        </StyledCard>
    </Grid>
}
export default Card