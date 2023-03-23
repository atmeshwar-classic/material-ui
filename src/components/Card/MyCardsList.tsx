import MyCard from "./MyCard";
import Box from "@mui/material/Box";
import { myCardsData } from "../../data/myData";

const myCardsStyle = {
  margin: "auto",
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

const MyCardsList = () => {
  return (
    <Box className="myCards" sx={myCardsStyle}>
      {myCardsData.map((item, index) => {
        return <MyCard {...item} key={index} />;
      })}
    </Box>
  );
};

export default MyCardsList;
