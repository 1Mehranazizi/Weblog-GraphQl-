import React from "react";
import { useQuery } from "@apollo/client";
import { Avatar, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_INFO } from "../graphql/queries";
import { Container } from "@mui/system";
import sanitizeHtml from "sanitize-html";
import CardEl from "../components/shared/CardEl";
import Loader from "../components/shared/Loader";

const AuthorPage = () => {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) return <h3>Error</h3>;
  const { author } = data;
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} mt={8}>
        <Grid item xs={12}>
          <Avatar
            src={author.avatar.url}
            alt={author.name}
            sx={{
              display: "block",
              margin: "0 auto",
              width: 250,
              height: 250,
              marginBottom: 2,
            }}
          />
          <Typography component="h3" variant="h4" textAlign="center">
            {author.name}
          </Typography>
          <Typography
            component="h3"
            variant="h6"
            color="text.secondary"
            textAlign="center"
          >
            {author.field}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(author.description.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12}>
            <Typography component="h3" variant="h5" mb={3}>مقالات {author.name}</Typography>
          <Grid container spacing={3}>
            {author.posts.map((post) => (
              <Grid key={post.id} item xs={12} sm={6} md={3}>
                <CardEl
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AuthorPage;
