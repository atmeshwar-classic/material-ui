import {  Button } from "@mui/material/";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MyCardActions,MyCard as MyCustomCard } from "../../styles/styles";

type MyCardProps = {
  header: string;
  subheader: string;
  title: string;
  subtitle: string;
  description: string;
};

const MyCard = ({
  header,
  subheader,
  title,
  subtitle,
  description,
}: MyCardProps) => {
  return (
    <MyCustomCard>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "primary.main" }} aria-label="recipe">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={header}
        subheader={subheader}
      />
      <CardMedia
        component="img"
        height="147"
        image="./../../assets/img1.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle1">{subtitle}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <MyCardActions disableSpacing>
        <Button variant="outlined">Enabled</Button>
        <Button variant="contained">Disabled</Button>
      </MyCardActions>
    </MyCustomCard>
  );
};

export default MyCard;
