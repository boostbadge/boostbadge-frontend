import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import { GET_CURRENT_USER_QUERY } from '../../queries/GET_CURRENT_USER_QUERY';

const CurrentUser = props => (
  <Query {...props} query={GET_CURRENT_USER_QUERY}>
    {payload => props.children(payload)}
  </Query>
);

CurrentUser.propTypes = {
  children: PropTypes.func.isRequired,
};

export default CurrentUser;
