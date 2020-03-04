import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import Head from 'next/head';
import Error from '../util/ErrorMessage';
import PageHeader from '../layout/PageHeader';
import { LIST_USERS_QUERY } from '../../queries/LIST_USERS_QUERY';
import Users from './Users';
import { perPage } from '../../config/config';

const UsersPage = ({ page }) => {
  const [isGrid, setIsGrid] = useState(true);
  return (
    <div>
      <Head>
        <title>Members | BOOSTBADGE</title>
      </Head>
      <PageHeader title="Members" />
      <Query
        query={LIST_USERS_QUERY}
        variables={{
          offset: page * perPage - perPage,
        }}
      >
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <Error error={error} />;
          return (
            <Users
              users={data.listUsers}
              page={page}
              isGrid={isGrid}
              setIsGrid={setIsGrid}
            />
          );
        }}
      </Query>
    </div>
  );
};

UsersPage.propTypes = {
  page: PropTypes.number,
};

export default UsersPage;
