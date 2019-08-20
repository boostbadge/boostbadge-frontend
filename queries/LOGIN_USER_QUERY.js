import gql from 'graphql-tag';

export const LOGIN_USER_QUERY = gql`
  mutation LOGIN_USER_QUERY($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      username
      email
      firstName
      lastName
    }
  }
`;
