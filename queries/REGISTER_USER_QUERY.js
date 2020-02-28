import gql from 'graphql-tag';

export const REGISTER_USER_QUERY = gql`
  mutation REGISTER_USER_QUERY(
    $username: String!
    $email: String!
    $firstName: String!
    $lastName: String!
    $password: String!
  ) {
    register(
      username: $username
      email: $email
      firstName: $firstName
      lastName: $lastName
      password: $password
    ) {
      id
      username
      email
      firstName
      lastName
    }
  }
`;
