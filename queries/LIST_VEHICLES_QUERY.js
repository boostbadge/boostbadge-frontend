import gql from 'graphql-tag';

export const LIST_VEHICLES_QUERY = gql`
  query LIST_VEHICLES_QUERY {
    listVehicles {
      id
      nickname
      description
      year
      make
      model
      featuredImage
      user {
        id
        displayName
      }
    }
  }
`;
