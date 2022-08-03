import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
      <Box component="div" bgcolor="#f7f7f7" sx={{ textAlign: "center",padding:2 ,marginTop:3}}>
        <Typography component="h5" variant="h6" fontWeght={500} color="primary">
          پروژه وبلاگ وب دینو
        </Typography>
      </Box>
  );
};

export default Footer;
