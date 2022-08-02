import { Button, Card, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const CommentForm = () => {
  return (
    <Card
      sx={{ boxShadow: "0 5px 15px rgba(112,112,112,0.2)", borderRadius: 4 }}
    >
      <Grid container spacing={3} padding={2}>
        <Grid item xs={12}>
          <Typography
            component="h4"
            varinat="h5"
            fontWeight={600}
            color="primary"
          >
            نطر خود را با ما در میان بگذراید
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField label="نام و نام خانوادگی" varinat="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="ایمیل" varinat="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField
            varinat="outlined"
            placeholder="نظر شما"
            multiline
            minRows={4}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained">ثبت نظر</Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CommentForm;
