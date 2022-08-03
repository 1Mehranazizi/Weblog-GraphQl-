import React from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_COMMENTS_POST } from "../../graphql/queries";
import { Box } from "@mui/system";

const Comments = ({ slug }) => {
  const { loading, data, error } = useQuery(GET_COMMENTS_POST, {
    variables: { slug },
  });
  if (loading) return null;
  if (error) return null;
  const { comments } = data;
  return (
    <Grid
      container
      spacing={3}
      sx={{ boxShadow: "0 5px 15px rgba(112,112,112,0.2)", borderRadius: 4 }}
      padding={2}
    >
      <Grid item xs={12}>
        <Typography
          component="h4"
          varinat="h4"
          fontWeight={600}
          color="primary"
          mb={2}
        >
          نظرات
        </Typography>
      </Grid>
      {comments.map((comment) => (
        <Grid
          item
          xs={12}
          key={comment.id}
          padding={2}
          border="1px solid #ccc"
          borderRadius={5}
          sx={{ display: "flex", alignItems: "center" }}
          mb={3}
        >
          <Avatar sx={{ marginRight: 2 }}>{comment.name[0]}</Avatar>
          <Box component="div">
            <Typography component="p" variant="p">
              {comment.name}
            </Typography>
            <Typography
              component="small"
              variant="small"
              color="text.secondary"
            >
              {comment.text}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Comments;
