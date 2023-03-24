import { Box, Button, Container, Stack, useTheme } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
    const theme = useTheme()

  const pageLinks = [
    { link: "/page1", name: "Page 1" },
    { link: "/page2", name: "Page 2" },
    { link: "/page3", name: "Page 3" },
  ];
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Stack direction="row" spacing={2}>
          {pageLinks.map(( page, index) => (
            <Button key={index} variant="contained" sx={{backgroundColor:'#FFD8E4', ":hover": {backgroundColor: '#E8DEF8'}}}>
              <Link to={page.link} style={{ textDecoration: "none" }}>
                {page.name}
              </Link>
            </Button>
          ))}
        </Stack>
      </Box>
      <Box sx={{ marginTop: 0 }}>
        <Outlet />
      </Box>
    </Container>
  );
};

export default HomePage;
