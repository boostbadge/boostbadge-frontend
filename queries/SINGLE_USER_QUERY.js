import gql from 'graphql-tag';

export const SINGLE_USER_QUERY = gql`
  query SINGLE_USER_QUERY($id: ID!) {
    user(id: $id) {
      id
      username
      createdAt
      profilePhoto
      coverPhoto
      verified
      twitter
      instagram
      facebook
      youtube
      vimeo
      description
      vehicles {
        id
        featuredImage
        nickname
        year
        make
        model
        blurb
      }
    }
  }
`;
