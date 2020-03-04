import gql from 'graphql-tag';
import { perPage } from '../config/config';

export const LIST_VEHICLES_QUERY = gql`
  query LIST_VEHICLES_QUERY($offset: Int = 0, $limit: Int = ${perPage}) {
    listVehicles(offset: $offset, limit: $limit) {
      id
      nickname
      description
      year
      make
      model
      featuredImageCover
      user {
        id
        displayName
      }
    }
  }
`;
