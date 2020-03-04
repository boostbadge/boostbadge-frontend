import gql from 'graphql-tag';
import { perPage } from '../config/config';

export const LIST_USERS_QUERY = gql`
  query LIST_USERS_QUERY($offset: Int = 0, $limit: Int = ${perPage}) {
    listUsers(offset: $offset, limit: $limit) {
      id
      displayName
      profilePhoto
      profilePhotoThumbnail
      coverPhoto
      coverPhotoThumbnail
      verified
      firstName
      lastName
    }
  }
`;
