import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Pagination from '../util/Pagination';
import CatalogButtonGroup from '../util/CatalogButtonGroup';
import VehiclesGrid from './VehiclesGrid';
import VehiclesList from './VehiclesList';

const StyledListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Vehicles = ({ vehicles, page, isGrid, setIsGrid }) => (
  <>
    <Pagination pathname="vehicles" page={page} />
    <StyledListHeader>
      <CatalogButtonGroup isGrid={isGrid} setIsGrid={setIsGrid} />
    </StyledListHeader>
    {isGrid && <VehiclesGrid vehicles={vehicles} />}
    {!isGrid && <VehiclesList vehicles={vehicles} />}
    <Pagination pathname="vehicles" page={page} />
  </>
);

Vehicles.propTypes = {
  vehicles: PropTypes.array.isRequired,
  page: PropTypes.number,
  isGrid: PropTypes.bool.isRequired,
  setIsGrid: PropTypes.func.isRequired,
};

export default Vehicles;
