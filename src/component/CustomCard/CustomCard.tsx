import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CustomButton from "../CustomButton/CustomButton";
import { SxProps } from "@mui/material";

interface Props {
  children: React.ReactNode;
  sx?: SxProps;
  color: string | undefined;
  image?: string;
}

const CustomCard: React.FC<Props> = ({ children, sx, color, image }) => {
  console.log(color);
  return (
    <>
      <Card
        sx={sx}
        variant="elevation"
        style={{ maxWidth: 380, borderRadius: 12, margin: 25 }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: color }} aria-label="Avatar" alt="Avatar">
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
          sx={{ padding: "20px" }}
        />
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="card image"
        />
        <CardContent>
          <Typography variant="body1">Title</Typography>
          <Typography variant="caption">Subhead</Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            marginTop={5}
            marginBottom={2}
          >
            {children}
          </Typography>
        </CardContent>
        <Grid
          container
          direction="row"
          justifyContent="right"
          alignItems="center"
          marginBottom={1}
        >
          <CustomButton
            color="primary"
            variant="outlined"
            sx={{ marginRight: "10px", marginBottom: "10px" }}
          >
            Enabled
          </CustomButton>
          <CustomButton
            color="primary"
            variant="contained"
            sx={{ marginRight: "10px", marginBottom: "10px" }}
          >
            Enabled
          </CustomButton>
        </Grid>
      </Card>
    </>
  );
};

export default CustomCard;
