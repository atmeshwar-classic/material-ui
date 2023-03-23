import Avatar from "@mui/material/Avatar";
import { Box, Typography } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
type TabItemProps = {
  title: string;
  description: string;
};
const TabItem = ({ title, description }: TabItemProps) => {
  return (
    <Box sx={{display:'flex',justifyContent:"flex-start",gap:'10px', marginBottom:'10px'}}>
      <Avatar>
        <PersonOutlineOutlinedIcon />
      </Avatar>
      <Box>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </Box>
    </Box>
  );
};
export default TabItem;
