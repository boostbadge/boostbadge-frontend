import React from 'react';
import { Mutation } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../../queries/CURRENT_USER_QUERY';
import { LOGOUT_USER_QUERY } from '../../queries/LOGOUT_USER_QUERY';

const Logout = () => (
  <Mutation mutation={LOGOUT_USER_QUERY} refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
    {logout => (
      <button type="button" onClick={logout}>
        Log Out
      </button>
    )}
  </Mutation>
);

export default Logout;
