import gql from 'graphql-tag';

export const GET_VEHICLE_QUERY = gql`
  query GET_VEHICLE_QUERY($id: ID!) {
    getVehicle(id: $id) {
      id
      featuredImage
      forSale
      year
      make
      model
      nickname
      location
      description
      exteriorColor
      interiorColor
      miles
      awards
      vin
      engine
      horsepower
      torque
      transmission
      suspension
      wheels
      tires
      brakes
      curbWeight
      modifications
      topSpeed
      acceleratingTime
      quarterMileTime
      brakingTime
      url
      instagram
      facebook
      likes
      photos {
        url
      }
      badge {
        bbId
        activated
        imageUrl
      }
    }
  }
`;
