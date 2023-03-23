import React from "react";
import { Div, TypographyWrapper } from "../globalStyles";
import Person2Icon from "@mui/icons-material/Person2";
import { Typography } from "@mui/material";

const RenderTabContent = ({ currentTab }: { currentTab: string }) => {
  return (
    <Div margin="20px 0px">
      {[...Array(4).keys()].map((item) => (
        <Div display="flex" alignItems="center" margin="16px 0px">
          <Person2Icon />
          <Div margin="0px 20px 0px">
            <div>
              <Typography variant="body1">List item</Typography>
            </div>
            <div>
              <TypographyWrapper
                fontSize={"16px"}
                text_color="#49454F"
                variant="body2">
                Supporting line text lorem ipsum dolor sit
                <br /> amet, consectetur
              </TypographyWrapper>
            </div>
          </Div>
        </Div>
      ))}
    </Div>
  );
};

export default RenderTabContent;
