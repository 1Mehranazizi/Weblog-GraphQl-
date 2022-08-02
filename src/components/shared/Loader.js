import { CircularProgress } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const Loader = () => {
  return (
    <Container maxWidth="lg">
      <Box
        component="div"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ width: "100%", height: "100vh" }}
      >
        <CircularProgress />
      </Box>
    </Container>
  );
};

export default Loader;
