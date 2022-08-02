import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import React from "react";
import { GET_BLOGS_INFO } from "../../graphql/queries";
import CardEl from "../shared/CardEl";
import Loader from "../shared/Loader";

const Blogs = () => {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);
  if (loading) return <Loader />;
  if (error) return <h3>Error...</h3>;
  const { posts } = data;
  return (
    <Grid container spacing={3}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <CardEl {...post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Blogs;
