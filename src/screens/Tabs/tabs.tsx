import React from "react";
import { Box, Container, Tab, Tabs, Typography,SxProps } from "@mui/material";
import { useTheme, Theme } from '@mui/material';
import PersonIcon from "@mui/icons-material/Person";
import TabPanel from "../../components/TabPanel/TabPanel";
import { TabData } from "../../utils/mockData";


type TabDataProps = {
  title:string
  description:string
}


function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}



const MuiTabs = () => {
  const [value, setValue] = React.useState(0);
  const theme:Theme = useTheme<Theme>()

  console.log(theme.palette.secondary.main)
  const style: Record<string, SxProps> = {
    container: {
      padding: "40px",
      display: "grid",
    },
    title: {
      fontSize: "16px",
      fontWeight: 500,
    },
    subtitle: {
      fontSize: "14px",
      fontWeight: 400,
    },
    tabContainerStyle:{
      background:"#FFFBFE",
     maxWidth:"320px"
   },
    tabs:{
      borderBottom: 1, 
      borderColor: "divider", 
    },
    tabPanel:{},
  };


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container sx={style.container}>
      <Box sx={style.tabContainerStyle}>
      <Box sx={style.tabs}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label='Item1' {...a11yProps(0)} />
          <Tab label='Item2' {...a11yProps(1)} />
          <Tab label='Item3' {...a11yProps(2)} />
        </Tabs>
      </Box>
      <Box sx={style.tabPanel}>
      <TabPanel value={value} index={0}>
          {
            TabData.map((item:TabDataProps,i )=>{
              return(
                < Box key ={i} sx={{display:"flex", paddingBottom:"10px",gap: "10px", padding: "10px"}}>
                  <PersonIcon />
                <Box>
                <Typography
                  variant='subtitle1'
                  color='common.black'
                  sx={style.title}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant='subtitle1'
                  color='text.secondary'
                  sx={style.subtitle}
                >
                 {item.description}
                </Typography>
              </Box>
              </Box>
              )
            })
          }
      </TabPanel>
      <TabPanel value={value} index={1}>
          {
            TabData.map((item:TabDataProps, i)=>{
              return(
                < Box key ={i} sx={{display:"flex", paddingBottom:"10px",gap: "10px", padding: "10px"}}>
                  <PersonIcon />
                <Box>
                <Typography
                  variant='subtitle1'
                  color='common.black'
                  sx={style.title}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant='subtitle1'
                  color='text.secondary'
                  sx={style.subtitle}
                >
                 {item.description}
                </Typography>
              </Box>
              </Box>
              )
            })
          }
      </TabPanel>
      <TabPanel value={value} index={2}>
          {
            TabData.map((item:TabDataProps, i)=>{
              return(
                < Box key ={i} sx={{display:"flex", paddingBottom:"10px",gap: "10px", padding: "10px"}}>
                  <PersonIcon />
                <Box>
                <Typography
                  variant='subtitle1'
                  color='common.black'
                  sx={style.title}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant='subtitle1'
                  color='text.secondary'
                  sx={style.subtitle}
                >
                 {item.description}
                </Typography>
              </Box>
              </Box>
              )
            })
          }
      </TabPanel>
      </Box>
      </Box>
    </Container>
  );
};

export default MuiTabs;
