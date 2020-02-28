import gql from 'graphql-tag';

export const GET_CURRENT_USER_QUERY = gql`
  query GET_CURRENT_USER_QUERY {
    getCurrentUser {
      id
      displayName
      email
      firstName
      lastName
      role
    }
  }
`;
