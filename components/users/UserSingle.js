import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Query } from 'react-apollo';
import Error from '../util/ErrorMessage';
import { GET_VEHICLE_QUERY } from '../../queries/GET_VEHICLE_QUERY';

class VehicleSingle extends Component {
  render() {
    const { id } = this.props;
    return (
      <Query query={GET_VEHICLE_QUERY} variables={{ id }}>
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.getVehicle) return <p>No Vehicle Found for {id}</p>;
          const { getVehicle } = data;
          return (
            <React.Fragment>
              <Head>
                <title>{getVehicle.nickname} | BOOSTBADGE</title>
              </Head>
              <div>
                <h4>{getVehicle.featuredImage}</h4>
                <h4>{getVehicle.nickname}</h4>
                <h4>{getVehicle.year}</h4>
                <h4>{getVehicle.make}</h4>
                <h4>{getVehicle.model}</h4>
                <h4>{getVehicle.forSale}</h4>
                <h4>{getVehicle.location}</h4>
                <h4>{getVehicle.description}</h4>
                <h4>{getVehicle.exteriorColor}</h4>
                <h4>{getVehicle.interiorColor}</h4>
                <h4>{getVehicle.miles}</h4>
                <h4>{getVehicle.awards}</h4>
                <h4>{getVehicle.vin}</h4>
                <h4>{getVehicle.engine}</h4>
                <h4>{getVehicle.horsepower}</h4>
                <h4>{getVehicle.torque}</h4>
                <h4>{getVehicle.transmission}</h4>
                <h4>{getVehicle.suspension}</h4>
                <h4>{getVehicle.wheels}</h4>
                <h4>{getVehicle.tires}</h4>
                <h4>{getVehicle.brakes}</h4>
                <h4>{getVehicle.curbWeight}</h4>
                <h4>{getVehicle.modifications}</h4>
                <h4>{getVehicle.topSpeed}</h4>
                <h4>{getVehicle.acceleratingTime}</h4>
                <h4>{getVehicle.quarterMileTime}</h4>
                <h4>{getVehicle.brakingTime}</h4>
                <h4>{getVehicle.url}</h4>
                <h4>{getVehicle.instagram}</h4>
                <h4>{getVehicle.facebook}</h4>
                <h4>{getVehicle.likes}</h4>
              </div>
            </React.Fragment>
          );
        }}
      </Query>
    );
  }
}

VehicleSingle.propTypes = {
  id: PropTypes.string.isRequired,
};

export default VehicleSingle;
