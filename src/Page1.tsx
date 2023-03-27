import { IconButton } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Page1Box, Page1Button, Page1Card } from "./styles";
import { ThemeProvider } from "@mui/material/styles";
import { palatteTheme } from "./themes";

export const Page1 = () => {
  return (
    <>
      <ThemeProvider theme={palatteTheme}>
        <Page1Box >
          {[...Array(3).keys()].map(() => (
            <Page1Card>
              <CardHeader sx={{height:"25px"}}
                avatar={
                  <Avatar sx={{ bgcolor: "#6750A4" }} aria-label="title">
                    A
                  </Avatar>
                }
                action={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Title"
                subheader="Subtitle"
              />
              <CardMedia
                component="img"
                height="150"
                image="https://www.edgeintelligence.com/wp-content/uploads/2018/09/howitworks-e1536087410577.jpg"
              />
              <CardContent sx={{ height: 90 }}>
                <Typography gutterBottom variant="h6">
                  Lizard
                </Typography>
                <Typography  variant="body1" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Page1Button variant="outlined">
                  Enabled
                </Page1Button>
                <Page1Button variant="contained">
                  Disabled
                </Page1Button>
              </CardActions>
            </Page1Card>
          ))}
        </Page1Box>
      </ThemeProvider>
    </>
  );
};
