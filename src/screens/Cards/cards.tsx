import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import MuiCard from '../../components/Card/Card'


const Cards = () => {
 const style = {
  container:{
    padding:"20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gridGap: "10px",
  }
 }

  return (
    <Box sx={style.container}>
      <MuiCard />
      <MuiCard />
      <MuiCard />
    </Box>
  )
}

export default Cards