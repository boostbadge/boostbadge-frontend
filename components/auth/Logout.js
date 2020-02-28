import React from 'react';
import { Mutation } from 'react-apollo';
import { GET_CURRENT_USER_QUERY } from '../../queries/GET_CURRENT_USER_QUERY';
import { LOGOUT_USER_QUERY } from '../../queries/LOGOUT_USER_QUERY';

const Logout = () => (
  <Mutation
    mutation={LOGOUT_USER_QUERY}
    refetchQueries={[{ query: GET_CURRENT_USER_QUERY }]}
  >
    {logout => (
      <button type="button" onClick={logout}>
        Log Out
      </button>
    )}
  </Mutation>
);

export default Logout;
