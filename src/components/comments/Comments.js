import { Card, Grid, Typography } from "@mui/material";
import React from "react";

const Comments = () => {
  return (
    <Card
      sx={{ boxShadow: "0 5px 15px rgba(112,112,112,0.2)", borderRadius: 4 }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            component="h4"
            varinat="h5"
            fontWeight={600}
            color="primary"
          >
            نظرات
          </Typography>
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Card>
  );
};

export default Comments;
