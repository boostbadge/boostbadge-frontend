import PropTypes from 'prop-types';
import VehiclesPage from '../components/vehicles/VehiclesPage';

const Vehicles = ({ query }) => (
  <div>
    <VehiclesPage page={parseInt(query.page) || 1} />
  </div>
);

Vehicles.propTypes = {
  query: PropTypes.object,
};

export default Vehicles;
