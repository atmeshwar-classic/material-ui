import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import { MyBox } from "../../styles/styles";

const BottomNav = () => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  return (
    <MyBox ref={ref}>
      <CssBaseline />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            navigate(`./${newValue}`);
          }}
        >
          <BottomNavigationAction
            id="dashboard"
            label="Dashboard"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction label="Form" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Tabs" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </MyBox>
  );
};

export default BottomNav;
