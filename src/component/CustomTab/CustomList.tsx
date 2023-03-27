import {
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
    Divider,
  } from "@mui/material";
  import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
  import { List } from "@mui/material";

  interface Props {
    index: number;
  }
  
  const CustomList: React.FC<Props> = ({index}): JSX.Element => {
    return (
      <>  
        <List sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <PersonOutlineIcon />
            </ListItemAvatar>
            <ListItemText
              primary= {`List Item ${index}`}
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.secondary"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Saepe ipsam dolore unde repudiandae nam inventore?
                  </Typography>
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <PersonOutlineIcon />
            </ListItemAvatar>
            <ListItemText
              primary= {`List Item ${index}`}
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.secondary"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Saepe ipsam dolore unde repudiandae nam inventore?
                  </Typography>
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <PersonOutlineIcon />
            </ListItemAvatar>
            <ListItemText
              primary= {`List Item ${index}`}
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.secondary"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Saepe ipsam dolore unde repudiandae nam inventore?
                  </Typography>
                </>
              }
            />
          </ListItem>
        </List>
      </>
    );
  };
  
  export default CustomList;
  