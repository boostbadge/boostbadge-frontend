import gql from 'graphql-tag';

export const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY {
    users {
      id
      username
      profilePhoto
      coverPhoto
      verified
    }
  }
`;
