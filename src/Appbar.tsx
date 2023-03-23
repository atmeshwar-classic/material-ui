import {
    AppBar,
    Toolbar,
  } from "@mui/material";
import {useNavigate } from "react-router-dom";
import { NavigationBarButton } from "./styles";


export const Appbar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="absolute" sx={{ bgcolor: "#FFFFFF", borderBottom:5, borderBottomColor: "solid #CCCCCC", height:65  }}>
<Toolbar>
  <NavigationBarButton className="containedButton" onClick={()=>navigate('/page1')} variant="contained" >Page1</NavigationBarButton>
  <NavigationBarButton className="containedButton" onClick={()=>navigate('/page2')}  variant="contained" >Page2</NavigationBarButton>
  <NavigationBarButton className="containedButton" onClick={()=>navigate('/page3')}  variant="contained">Page3</NavigationBarButton>

  
  <NavigationBarButton
  className="outlinedButton"
    variant="outlined"
  >
    Sign In
  </NavigationBarButton>
  <NavigationBarButton
  className="containedButton"
    variant="contained"
  >
    Sign Up
  </NavigationBarButton>
</Toolbar>
</AppBar>
  )
}

