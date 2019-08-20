import gql from 'graphql-tag';

export const LOGOUT_USER_QUERY = gql`
  mutation LOGOUT_USER_QUERY {
    logout {
      message
    }
  }
`;
