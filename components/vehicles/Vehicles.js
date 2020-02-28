import React from 'react';
import { Query } from 'react-apollo';
import Head from 'next/head';
import Error from '../util/ErrorMessage';
import PageHeader from '../layout/PageHeader';
import { LIST_VEHICLES_QUERY } from '../../queries/LIST_VEHICLES_QUERY';
import VehicleList from './VehicleList';

const Vehicles = () => (
  <div>
    <Head>
      <title>Vehicles | BOOSTBADGE</title>
    </Head>
    <PageHeader title="Vehicles" />
    <Query query={LIST_VEHICLES_QUERY}>
      {({ data, error, loading }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <Error error={error} />;
        return <VehicleList vehicles={data.listVehicles} />;
      }}
    </Query>
  </div>
);

export default Vehicles;
