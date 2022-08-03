import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const Header = () => {
  return (
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h3" variant="h5" flex={1} fontWeight="600">
            <Link to="/" style={{color:"#fff"}}>وب دینو</Link>
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
