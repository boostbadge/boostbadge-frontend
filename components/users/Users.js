import React from 'react';
import { Query } from 'react-apollo';
import Head from 'next/head';
import Error from '../util/ErrorMessage';
import PageHeader from '../layout/PageHeader';
import { LIST_USERS_QUERY } from '../../queries/LIST_USERS_QUERY';
import UserList from './UserList';

const Users = () => (
  <div>
    <Head>
      <title>Members | BOOSTBADGE</title>
    </Head>
    <PageHeader title="Members" />
    <Query query={LIST_USERS_QUERY}>
      {({ data, error, loading }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <Error error={error} />;
        return <UserList users={data.listUsers} />;
      }}
    </Query>
  </div>
);

export default Users;
