import React from 'react';
import PropTypes from 'prop-types';
import Catalog from '../util/Catalog';
import Vehicle from './Vehicle';

const VehicleList = ({ vehicles }) => (
  <Catalog>
    {vehicles.map(vehicle => (
      <Vehicle vehicle={vehicle} key={vehicle.id} />
    ))}
  </Catalog>
);

VehicleList.propTypes = {
  vehicles: PropTypes.array.isRequired,
};

export default VehicleList;
