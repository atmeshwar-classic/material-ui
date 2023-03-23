import MyCard from "./MyCard";
import Box from '@mui/material/Box'

const myCardsStyle = {
  margin: "auto",
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

const MyCardsList = () => {
  return (
    <Box className="myCards" sx={myCardsStyle}> 
      <MyCard />
      <MyCard />
      <MyCard />
    </Box>
  );
};

export default MyCardsList;
