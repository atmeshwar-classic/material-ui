import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Page3List } from '../Home/Mockdata';
import { Grid } from '@mui/material';
import { Stack } from '@mui/system';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
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
      {...other}
    >
      {value === index && (
        <Box >
          {children}
        </Box>
      )}
    </div>
  );
}


const ListItem = (props:any)=>{
    const {text,title}=props.item;
    return <Box>
        <Grid container>
            <Grid item sm={2}>
                <Box pl={2} pt={1}>
                    <PersonOutlineOutlinedIcon />
                </Box>
            </Grid>
            <Grid item sm={10}>
                <Typography fontWeight="bold">{title}</Typography>
                <Typography >{text}</Typography>
            </Grid>
        </Grid>
    </Box>
}

export default function Page3() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{width:"360px"}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' , mb:1 }}>
        <Tabs value={value} onChange={handleChange} color="secondary"  >
          <Tab label="Tab" sx={{minWidth:'33.33%'}}/>
          <Tab label="Tab" sx={{minWidth:'33.33%'}}/>
          <Tab label="Tab" sx={{minWidth:'33.33%'}}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
        <Stack spacing={2}>
            {Page3List.map((item:any)=><ListItem item={item}/>)}
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Stack spacing={2}>
            {Page3List.map((item:any)=><ListItem item={item}/>)}
        </Stack>      </TabPanel>
      <TabPanel value={value} index={2}>
        <Stack spacing={2}>
            {Page3List.map((item:any)=><ListItem item={item}/>)}
        </Stack>      
      </TabPanel>
    </Box>
  );
}