import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import Head from 'next/head';
import Error from '../util/ErrorMessage';
import PageHeader from '../layout/PageHeader';
import { LIST_VEHICLES_QUERY } from '../../queries/LIST_VEHICLES_QUERY';
import Vehicles from './Vehicles';
import { perPage } from '../../config/config';

const VehiclesPage = ({ page }) => {
  const [isGrid, setIsGrid] = useState(true);
  return (
    <div>
      <Head>
        <title>Vehicles | BOOSTBADGE</title>
      </Head>
      <PageHeader title="Vehicles" />
      <Query
        query={LIST_VEHICLES_QUERY}
        variables={{
          offset: page * perPage - perPage,
        }}
      >
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <Error error={error} />;
          return (
            <Vehicles
              vehicles={data.listVehicles}
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

VehiclesPage.propTypes = {
  page: PropTypes.number,
};

export default VehiclesPage;
