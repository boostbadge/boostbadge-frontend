import PropTypes from 'prop-types';
import UserSingle from '../components/members/UserSingle';

const Member = ({ query }) => {
  const { id } = query;
  return (
    <div>
      <UserSingle id={id} />
    </div>
  );
};

Member.propTypes = {
  query: PropTypes.object.isRequired,
};

export default Member;
