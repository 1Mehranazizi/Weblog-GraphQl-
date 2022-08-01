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

export {GET_BLOGS_INFO}
