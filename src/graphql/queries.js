import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      author {
        ... on Author {
          id
          name
          slug
          avatar {
            url
          }
        }
      }
      coverPhoto {
        url
      }
      id
      slug
      title
    }
  }
`;

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      avatar {
        url
      }
      field
      id
      name
      slug
    }
  }
`;

const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      name
      description {
        html
      }
      posts {
        coverPhoto {
          url
        }
        id
        slug
        title
      }
    }
  }
`;

const GET_BLOG_INFO = gql`
  query getBlogInfo($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        ... on Author {
          name
          field
          avatar {
            url
          }
        }
      }
      content {
        html
      }
      coverPhoto {
        url
      }
      title
      slug
    }
  }
`;

const GET_COMMENTS_POST = gql`
query getCommentsPost($slug:String!) {
  comments(where: {post: {slug: $slug}}) {
    id
    name
    text
  }
}

`

export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO, GET_BLOG_INFO , GET_COMMENTS_POST };
