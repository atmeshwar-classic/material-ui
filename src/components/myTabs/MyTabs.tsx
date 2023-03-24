import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import TabItem from "./TabItem";
import { myTabsContent } from "../../data/myData";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}
const tabPanelStyle = {
  width: "100%",
  maxWidth: 360,
};
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const MyTabs = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  return (
    <Box sx={{ bgcolor: "background.paper", width: 500 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          sx={{ backgroundColor: "#fff" }}
        >
          <Tab label="Item One" {...a11yProps(0)} sx={{ color: "primary" }} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {/* <List disablePadding sx={{ px: 0, maxWidth: 470 }}> */}
          {myTabsContent.map((item, index) => {
            return (
              <TabItem
                key={index}
                title={item.title}
                description={item.description}
              ></TabItem>
            );
          })}
          {/* </List> */}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {myTabsContent.map((item, index) => {
            return (
              <TabItem
                key={index}
                title={item.title}
                description={item.description}
              ></TabItem>
            );
          })}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          {myTabsContent.map((item, index) => {
            return (
              <TabItem
                key={index}
                title={item.title}
                description={item.description}
              ></TabItem>
            );
          })}
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
};

export default MyTabs;
