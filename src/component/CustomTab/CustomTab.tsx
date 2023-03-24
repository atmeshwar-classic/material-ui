import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CustomList from "./CustomList";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
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

export default function CustomTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 600 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="secondary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="Tab 1" {...a11yProps(0)} />
        <Tab label="Tab 2" {...a11yProps(1)} />
        <Tab label="Tab 3" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <CustomList index={1} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CustomList index={2} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CustomList index={3} />
      </TabPanel>
    </Box>
  );
}
