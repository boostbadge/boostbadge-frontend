import PropTypes from 'prop-types';
import VehicleSingle from '../components/vehicles/VehicleSingle';

const Vehicle = ({ query }) => {
  const { id } = query;
  return (
    <div>
      <VehicleSingle id={id} />
    </div>
  );
};

Vehicle.propTypes = {
  query: PropTypes.object.isRequired,
};

export default Vehicle;
