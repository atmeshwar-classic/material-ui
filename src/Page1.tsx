import { AppBar, Button, Divider, IconButton, Toolbar } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from '@mui/material/Box';
import { Page1Button, Page1Card } from "./styles";


export const Page1 = () => {
  
  return (
    <>
      <Box sx={{display: "flex", marginLeft:5}}>
      {[...Array(3).keys()].map((item) => (
       
        <Page1Card>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "#6750A4",fontSize:20 }} aria-label="recipe">
                A
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Title"
            subheader="Subtitle"
            sx={{height:13,padding:3}}
          />
          <Divider/>
          <CardMedia
            component="img"
            height="150"
            image="https://www.edgeintelligence.com/wp-content/uploads/2018/09/howitworks-e1536087410577.jpg"
            alt="Paella dish"
          />
          <Divider></Divider>
          <CardContent sx={{height: 90}}>
            <Typography gutterBottom variant="h6" >
              Lizard
            </Typography>
            <Typography sx={{fontSize:12}} color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Page1Button
             size="small"
              variant="outlined"
            >
              Enabled
            </Page1Button>
            <Page1Button
              size="small"
              variant="contained"
              className="contained"
            >
              Disabled
            </Page1Button>
          </CardActions>
        </Page1Card>
       
      ))
    }
      </Box>
    </>
  );
};
