import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MyCommonButton from "../MyButton/MyCommonButton";


const MyCard = () => {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 440 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
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
        height="147"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h6">Title</Typography>
        <Typography variant="subtitle1">Subhead</Typography>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests.
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ display: "flex",gap:"10px" }}>
        <IconButton
          aria-label="Enabled"
          sx={{ marginLeft: "80px", padding: "0px"}}
        >
          <MyCommonButton>Enabled</MyCommonButton>
        </IconButton>
        <IconButton aria-label="Disabled" sx={{ padding: "0px" }}>
          <MyCommonButton sx={{ color: "#fff", backgroundColor: "#6750A4" }}>
            Disabled
          </MyCommonButton>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MyCard;
