import React from "react";
import { useQuery } from "@apollo/client";
import { Avatar, Card, Divider, Grid, Typography } from "@mui/material";
import { GET_AUTHORS_INFO } from "../../graphql/queries";
import {Link} from "react-router-dom"
import Loader from "../shared/Loader";

const Authors = () => {
  const { loading, data, error } = useQuery(GET_AUTHORS_INFO);
  if (loading) return <Loader />;
  if (error) return <h3>Error</h3>;
  const { authors } = data;
  return (
    <Card
      sx={{ boxShadow: "0 5px 15px rgba(112,112,112,0.2)", borderRadius: 4 }}
    >
      <Grid container spacing={3} padding={2}>
        {authors.map((author) => (
          <Grid item key={author.id} xs={12}>
            <Link
              to={`/authors/${author.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "8px",
              }}
            >
              <Avatar
                src={author.avatar.url}
                alt={author.slug}
                sx={{ marginLeft: 1 }}
              />
              <Typography
                component="h6"
                varaint="h6"
                fontWeight={400}
                color="text.primary"
              >
                {author.name}
              </Typography>
            </Link>
            <Divider variant="middle" />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default Authors;
