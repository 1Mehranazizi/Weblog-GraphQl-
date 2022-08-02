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
` 

export {GET_BLOGS_INFO , GET_AUTHORS_INFO}
