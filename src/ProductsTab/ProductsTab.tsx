import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { AppContainer, TabsWrapper } from "../globalStyles";
import RenderTabContent from "./RenderTabContent";

export default function ProductsTab() {
  const [value, setValue] = React.useState<string>("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <AppContainer sx={{ margin: "10px" }}>
      <TabsWrapper
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example">
        <Tab value="one" label="Cloths" />
        <Tab value="two" label="Watch" />
        <Tab value="three" label="electronics" />
      </TabsWrapper>
      <RenderTabContent currentTab={value} />
    </AppContainer>
  );
}
