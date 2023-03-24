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

type MyCardType = {
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
}: MyCardType) => {
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
      <CardActions disableSpacing sx={{ display: "flex", gap: "10px",justifyContent:'end' }}>
        {/* <IconButton
          aria-label="Enabled"
          sx={{ marginLeft: "80px", padding: "0px" }}
        >
          <MyCommonButton>Enabled</MyCommonButton>
        </IconButton>
        <IconButton aria-label="Disabled" sx={{ padding: "0px" }}>
          <MyCommonButton sx={{ color: "#fff", backgroundColor: "#6750A4" }}>
            Disabled
          </MyCommonButton>
        </IconButton> */}
        <MyCommonButton variant="outlined">Enabled</MyCommonButton>
        <MyCommonButton  variant='contained' sx={{ color: "#fff", backgroundColor: "#6750A4" }}>
          Disabled
        </MyCommonButton>
      </CardActions>
    </Card>
  );
};

export default MyCard;
