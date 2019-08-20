import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Vehicle from './Vehicle';

const StyledVehicles = styled.h1`
  color: ${props => props.theme.black};
  font-size: 28px;
  line-height: 30px;
  display: block;
  margin: 0 0 8px;
  border-bottom: solid 1px ${props => props.theme.lightgrey};
  padding-bottom: 4px;
`;

class Vehicles extends Component {
  render() {
    const { vehicles } = this.props;
    return (
      <React.Fragment>
        <StyledVehicles>Vehicles</StyledVehicles>
        {vehicles.map(vehicle => (
          <Vehicle vehicle={vehicle} key={vehicle.id} />
        ))}
      </React.Fragment>
    );
  }
}

Vehicles.propTypes = {
  vehicles: PropTypes.array.isRequired,
};

export default Vehicles;
