import gql from 'graphql-tag';

export const RESET_PASSWORD_USER_QUERY = gql`
  mutation resetPassword(
    $resetToken: String!
    $password: String!
    $confirmPassword: String!
  ) {
    resetPassword(
      resetToken: $resetToken
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id
      username
      email
      firstName
      lastName
    }
  }
`;
