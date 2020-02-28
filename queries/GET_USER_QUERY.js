import gql from 'graphql-tag';

export const GET_USER_QUERY = gql`
  query GET_USER_QUERY($id: ID!) {
    getUser(id: $id) {
      id
      displayName
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
        description
      }
    }
  }
`;
