import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import cardImage from "../../assets/images/cardImage.png";

import { useTheme } from "@emotion/react";

const MuiCard = (): JSX.Element => {
  const theme: any = useTheme();
  const style = {
    cardStyle: {
      border: `1px solid ${theme.palette.text.primary}`,
      borderRadius: "12px",
      maxWidth: 345,
      boxShadow: "none",
    },
    avatarStyle: {
      background: theme.palette.primary.main,
    },
    btnPrimary: {
      margin: "0px 5px",
      borderRadius: "100px",
      width: "97px",
      height: "40px",
    },
    title: {
      fontSize: "16px",
      fontWeight: 500,
    },
    subtitle: {
      fontSize: "14px",
      fontWeight: 400,
    },
    description: {
      padding: "10px 0px 0px 0px",
    },
  };

  return (
    <Card sx={style.cardStyle}>
      <CardHeader
        avatar={
          <Avatar sx={style.avatarStyle} aria-label='avatar'>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title='Heading'
        subheader='Subheading'
      />
      <CardMedia
        component='img'
        height='150'
        image={cardImage}
        alt='Paella dish'
      />
      <CardContent>
        <Typography variant='subtitle1' color='common.black' sx={style.title}>
          Title
        </Typography>
        <Typography
          variant='subtitle1'
          color='text.secondary'
          sx={style.subtitle}
        >
          Subtitle
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          sx={style.description}
        >
          This impressive paella is a perfect party dish and a fun meal to..
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ justifyContent: "flex-end", padding: "15px" }}
      >
        <Button sx={style.btnPrimary} color='primary' variant='outlined'>
          Enabled
        </Button>
        <Button sx={style.btnPrimary} color='primary' variant='contained'>
          Enabled
        </Button>
      </CardActions>
    </Card>
  );
};

export default MuiCard;
