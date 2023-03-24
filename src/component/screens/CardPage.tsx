import { useTheme } from "@emotion/react";
import CustomCard from "../CustomCard/CustomCard";

const CardPage = (): JSX.Element => {
  const theme: any = useTheme();
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
      <CustomCard
        children={
          "Necessitatibus nam fugit perspiciatis, aliquid sit deleniti laudantium praesentium a alias vitae harum quisquam doloremque nulla quas officiis."
        }
        sx={{}}
        color={theme.palette.primary.main}
        image=""
      ></CustomCard>
      <CustomCard
        children={
          "Necessitatibus nam fugit perspiciatis, aliquid sit deleniti laudantium praesentium a alias vitae harum quisquam doloremque nulla quas officiis."
        }
        sx={{}}
        color={theme.palette.primary.main}
        image=""
      ></CustomCard>
      <CustomCard
        children={
          "Necessitatibus nam fugit perspiciatis, aliquid sit deleniti laudantium praesentium a alias vitae harum quisquam doloremque nulla quas officiis."
        }
        sx={{}}
        color={theme.palette.primary.main}
        image=""
      ></CustomCard>
    </div>
  );
};

export default CardPage;
