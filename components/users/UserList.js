import React from 'react';
import PropTypes from 'prop-types';
import Catalog from '../util/Catalog';
import User from './User';

const UserList = ({ users }) => (
  <Catalog>
    {users.map(user => (
      <User key={user.id} user={user} />
    ))}
  </Catalog>
);

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList;
