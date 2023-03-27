import { Card, Button } from "@mui/material/";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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
    <Card sx={{ maxWidth: 345, maxHeight: 440 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#6750A4" }} aria-label="recipe">
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
      <CardActions
        disableSpacing
        sx={{ display: "flex", gap: "10px", justifyContent: "end" }}
      >
        <Button variant="outlined">Enabled</Button>
        <Button variant="contained">Disabled</Button>
      </CardActions>
    </Card>
  );
};

export default MyCard;
