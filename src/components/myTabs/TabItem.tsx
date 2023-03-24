import Avatar from "@mui/material/Avatar";
import {
  Box,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

type TabItemProps = {
  title: string;
  description: string;
};

// const TabItem = ({ title, description }: TabItemProps) => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "flex-start",
//         gap: "10px",
//         marginBottom: "10px",
//       }}
//     >
//         <PersonOutlineOutlinedIcon />
//       <Box>
//         <Typography variant="subtitle1">{title}</Typography>
//         <Typography variant="body2">{description}</Typography>
//       </Box>
//     </Box>
//   );
// };
// export default TabItem;

const TabItem = ({ title, description }: TabItemProps) => {
  return (
    <ListItem disablePadding sx={{ maxWidth: 470, px: 0 }}>
      <ListItemButton sx={{ width: "100%", px: 0 }}>
        <ListItemIcon>
          <PersonOutlineOutlinedIcon />
        </ListItemIcon>
        <ListItemText
          primary="List item"
          secondary="Supporting line text lorem ipsum dolor sit amer, consectetur"
        />
      </ListItemButton>
    </ListItem>
  );
};
export default TabItem;
