import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Link from 'next/link';
import Error from './ErrorMessage';
import { perPage } from '../../config/config';

export const VEHICLE_PAGINATION_QUERY = gql`
  query VEHICLE_PAGINATION_QUERY {
    numOfVehicles
  }
`;

export const USERS_PAGINATION_QUERY = gql`
  query USERS_PAGINATION_QUERY {
    numOfUsers
  }
`;

const StyledPagination = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  div {
    display: inline-grid;
    grid-template-columns: repeat(3, auto);
    align-items: stretch;
    justify-content: center;
    align-content: center;
    border: 1px solid ${props => props.theme.black};
    border-radius: 10px;
    & > * {
      font-size: 1.25rem;
      margin: 0;
      padding: 0.5em 1em;
      border-right: 1px solid ${props => props.theme.lightgrey};
      &:last-child {
        border-right: 0;
      }
    }
    a[aria-disabled='true'] {
      color: grey;
      pointer-events: none;
    }
  }
`;

const Pagination = ({ pathname, page }) => (
  <Query
    query={
      (pathname === 'vehicles' && VEHICLE_PAGINATION_QUERY) ||
      (pathname === 'members' && USERS_PAGINATION_QUERY)
    }
  >
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <Error error={error} />;
      const count =
        (pathname === 'vehicles' && data.numOfVehicles) ||
        (pathname === 'members' && data.numOfUsers);
      const pages = Math.ceil(count / perPage);
      return (
        <StyledPagination data-test="pagination">
          <div>
            <Link
              href={{
                pathname,
                query: { page: page - 1 },
              }}
            >
              <a className="prev" aria-disabled={page <= 1}>
                ← Prev
              </a>
            </Link>
            <p>
              Page {page} of
              <span className="totalPages"> {pages}</span>
            </p>
            <Link
              href={{
                pathname,
                query: { page: page + 1 },
              }}
            >
              <a className="next" aria-disabled={page >= pages}>
                Next →
              </a>
            </Link>
          </div>
        </StyledPagination>
      );
    }}
  </Query>
);

Pagination.propTypes = {
  pathname: PropTypes.string.isRequired,
  page: PropTypes.number,
};

export default Pagination;
