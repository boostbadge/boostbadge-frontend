import gql from 'graphql-tag';

export const REQUEST_RESET_USER_QUERY = gql`
  mutation requestReset($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;
