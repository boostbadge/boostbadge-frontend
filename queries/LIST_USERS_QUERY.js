import gql from 'graphql-tag';

export const LIST_USERS_QUERY = gql`
  query LIST_USERS_QUERY {
    listUsers {
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
