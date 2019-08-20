import gql from 'graphql-tag';

export const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    currentUser {
      id
      username
      email
      firstName
      lastName
      role
    }
  }
`;
