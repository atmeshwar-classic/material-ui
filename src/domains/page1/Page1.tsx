import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Button, Grid, useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import * as React from "react";

const DisplayCards = () => {
  const theme = useTheme();
  return (
    <Card sx={{ maxWidth: 380, marginBottom:5, borderRadius:4, borderColor: theme.palette.outline.dark }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: theme.palette.primary.main }}
            aria-label="recipe"
          >
            A
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
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="subtitle1">Title</Typography>
        <Typography variant="body2" component="h3" sx={{ marginBottom: 5 }}>
          Subhead
        </Typography>

        <Typography variant="body2" component="p" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex",justifyContent: "flex-end", alignContent: "flex-end", padding:2 }}>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 100,
            marginRight: 2,
          }}
        >
          Enabled
        </Button>
        <Button
          variant="contained"
          sx={{
            borderRadius: 100,
          }}
        >
          Enabled
        </Button>
      </Box>
    </Card>
  );
};

const Page1: React.FC = () => {
  return (
    <Grid container spacing={5} sx={{ marginTop: 15 }}>
      <Grid item xs={12} md={6} lg={4}>
        <DisplayCards />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <DisplayCards />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <DisplayCards />
      </Grid>
    </Grid>
  );
};

export default Page1;
