import React, { Component } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import Head from 'next/head';
import Error from '../ErrorMessage';
import User from './User';
import { ALL_USERS_QUERY } from '../../queries/ALL_USERS_QUERY';

const UsersList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 40px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

export default class Users extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Members | BOOSTBADGE</title>
        </Head>
        <h1>Members</h1>
        <Query query={ALL_USERS_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <Error error={error} />;
            return (
              <UsersList>
                {data.users.map(user => (
                  <User user={user} key={user.id} />
                ))}
              </UsersList>
            );
          }}
        </Query>
      </div>
    );
  }
}
