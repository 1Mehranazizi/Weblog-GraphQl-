import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const Header = () => {
  return (
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h3" variant="h5" flex={1} fontWeight="600">
            وب دینو
          </Typography>
          <IconButton color="inherit">
            <MenuBookIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
