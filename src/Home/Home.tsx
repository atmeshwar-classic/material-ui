import { Grid } from "@mui/material";
import React from "react";
import { ICard } from "../common";
import Card from './Card'
import {cardsData} from './Mockdata';
const HomePage = ()=>{
    return <div>
        <Grid container spacing={2} p={3}>
            {cardsData.map((card:ICard)=><Card card={card}/>)}
        </Grid>
    </div>
}
export default HomePage