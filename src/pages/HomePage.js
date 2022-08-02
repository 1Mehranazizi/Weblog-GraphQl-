import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Authors from "../components/home/Authors";
import Blogs from "../components/home/Blogs";

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} mt={10} padding={3}>
        <Grid item xs={12} md={3}>
          <Typography component="h2" variant="h5" color="#666" mb={3} fontWeight={600}>
            نویسنده ها
          </Typography>
          <Authors />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography component="h2" variant="h5" color="#666" mb={3} fontWeight={600}>
            مقالات
          </Typography>
          <Blogs />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
