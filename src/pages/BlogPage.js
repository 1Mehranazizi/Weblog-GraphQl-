import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_BLOG_INFO } from "../graphql/queries";
import Loader from "../components/shared/Loader";
import { Box, Container } from "@mui/system";
import { Avatar, Grid, IconButton, Typography } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import sanitizeHtml from "sanitize-html";

const BlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { loading, data, error } = useQuery(GET_BLOG_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) return <h3>Error</h3>;
  const { post } = data;
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            component="h2"
            variant="h5"
            fontWeight={600}
            color="primary"
          >
            {post.title}
          </Typography>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIosRoundedIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <img
            src={post.coverPhoto.url}
            alt={post.title}
            width="100%"
            style={{ borderRadius: "20px" }}
          />
        </Grid>
        <Grid item xs={12} display="flex" alignItems="center">
          <Avatar
            src={post.author.avatar.url}
            alt={post.author.name}
            sx={{ marginLeft: 1, width: 100, height: 100 }}
          />
          <Box component="div">
            <Typography component="p" variant="p">
              {post.author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {post.author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(post.content.html),
            }}
          ></div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPage;
