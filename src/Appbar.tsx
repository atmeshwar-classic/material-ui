import {AppBar,Toolbar} from "@mui/material";
import {useNavigate} from "react-router-dom";
import { NavigationBarButton,AppbarStyles } from "./styles";
import { ThemeProvider } from "@mui/material/styles";
import { palatteTheme } from "./themes";



export const Appbar = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={palatteTheme}>
   <AppbarStyles> 
<Toolbar>
  <NavigationBarButton onClick={()=>navigate('/page1')} variant="contained" >Page1</NavigationBarButton>
  <NavigationBarButton onClick={()=>navigate('/page2')}  variant="contained" >Page2</NavigationBarButton>
  <NavigationBarButton onClick={()=>navigate('/page3')}  variant="contained">Page3</NavigationBarButton>

  
  <NavigationBarButton
  className="alignButton"
    variant="outlined"
  >
    Sign In
  </NavigationBarButton>
  <NavigationBarButton
    variant="contained"
  >
    Sign Up
  </NavigationBarButton>
</Toolbar>
</AppbarStyles>
</ThemeProvider>
  )
}

