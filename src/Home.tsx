import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Container, Grid } from "@mui/material";
import { ButtonWrapper, CardWrapper, AppContainer } from "./globalStyles";
import { dummyData } from "./utils/constant";
import { dummyDataProps } from "./utils/types";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export default function Home() {
  return (
    <AppContainer maxWidth="lg" sx={{ margin: "40px" }}>
      <Grid container spacing={5}>
        {dummyData.map((item: dummyDataProps) => (
          <Grid item xs={4} md={4}>
            <CardWrapper sx={{ maxWidth: 380 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "#503F7E" }} aria-label="recipe">
                    A
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.header}
                subheader={item.subHeader}
              />
              <CardMedia
                component="img"
                height="194"
                image="https://static.vecteezy.com/system/resources/previews/001/849/553/original/modern-gold-background-free-vector.jpg"
                alt="Paella dish"
              />
              <CardContent>
                <Typography
                  fontWeight={700}
                  variant="body1"
                  color="text.secondary">
                  {item.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.subHeader}
                </Typography>
                <Typography
                  marginTop={2}
                  variant="body2"
                  color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions
                sx={{ justifyContent: "flex-end", marginBottom: "15px" }}>
                <ButtonWrapper
                  sx={{ marginRight: 1 }}
                  background="#fffff"
                  variant="outlined"
                  text_color="#6750A4">
                  Enable
                </ButtonWrapper>
                <ButtonWrapper
                  background="#503F7E"
                  variant="outlined"
                  text_color="#FFFFFF">
                  Disable
                </ButtonWrapper>
              </CardActions>
            </CardWrapper>
          </Grid>
        ))}
      </Grid>
    </AppContainer>
  );
}
