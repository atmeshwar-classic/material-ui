import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid ,useTheme } from "@mui/material";
import { ContainedButton, OutlinedButton } from "./buttons";

export function RecipeReviewCard() {
    const theme = useTheme();
  return (
    <Grid item xs={12} md={6} lg ={4}>
      <Card sx={{ maxWidth: 340 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: theme.palette.primary.main }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Header"
          subheader="Subhead"
        />
        <CardMedia
          component="img"
          height="150"
          image="https://media.timeout.com/images/105124791/750/422/image.jpg"
          alt="Paella dish"
        />
        <CardContent>
            <Typography variant="subtitle1">Title</Typography>
            <Typography variant="subtitle2" color="text.primary">Subhead</Typography>

          <Typography sx={{marginTop:4}} variant="subtitle2" color="text.secondary">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor
          </Typography>
        </CardContent>
        <Box  sx={{display:'flex', justifyContent:'flex-end',padding:1}}>
        <OutlinedButton>
            Enabled
          </OutlinedButton>

          <ContainedButton>
            Enabled
          </ContainedButton>
          </Box>
      </Card>
    </Grid>
  );
}

export const Page1 = () => {
  return (
    <Grid container>
      <RecipeReviewCard />
      <RecipeReviewCard />
      <RecipeReviewCard />
    </Grid>
  );
};
