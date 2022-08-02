import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const CardEl = ({ title, author, slug, coverPhoto }) => {
  return (
    <Card
      sx={{ boxShadow: "0 5px 15px rgba(112,112,112,0.2)", borderRadius: 4 }}
    >
      <CardHeader
        avatar={
          <Avatar
            src={author.avatar.url}
            alt={author.name}
            sx={{ marginLeft: 1 }}
          />
        }
        title={author.name}
      />
      <CardMedia
        component="img"
        image={coverPhoto.url}
        height={180}
        width={180}
        alt={slug}
      />
      <CardContent>
        <Typography
          component="h3"
          variant="p"
          color="primary"
          fontWeight={600}
          sx={{ fontSize: 15 }}
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/blogs/${slug}`} style={{ display: "block", width: "100%" }}>
          <Button
            variant="contained"
            color="info"
            fullWidth
            sx={{ borderRadius: 5 }}
          >
            خواندن مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardEl;
