import PropTypes from 'prop-types';
import UsersPage from '../components/users/UsersPage';

const Members = ({ query }) => (
  <div>
    <UsersPage page={parseInt(query.page) || 1} />
  </div>
);

Members.propTypes = {
  query: PropTypes.object,
};

export default Members;
