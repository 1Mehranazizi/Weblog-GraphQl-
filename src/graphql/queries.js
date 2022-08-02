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
query getAuthorInfo($slug:String!) {
  author(where: {slug: $slug}) {
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
`

export { GET_BLOGS_INFO, GET_AUTHORS_INFO,GET_AUTHOR_INFO };
