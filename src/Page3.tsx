import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import PersonIcon from "@mui/icons-material/Person";
import { ListItemBox, TabBox } from "./styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

export function Page3() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ListItemBox>
      <TabBox >
        <Tabs
          value={value}
          onChange={handleChange}
        >
          <Tab label="Tab1" />
          <Tab label="Tab2" />
          <Tab label="Tab3" />
        </Tabs>
      </TabBox>
      <Divider></Divider>
      <TabPanel value={value} index={value}>
        <nav aria-label="main mailbox folders">
          {[...Array(4).keys()].map(() => (
            <ListItem disablePadding sx={{ paddingTop: 0 }}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                primary="List Item"
                secondary={
                  <Typography
                    sx={{ display: "inline", fontSize: "12px" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Supporting line text lorem ipsum dolor sit amet, consectetur
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </nav>
      </TabPanel>
    </ListItemBox>
  );
}
