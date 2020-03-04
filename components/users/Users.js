import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Pagination from '../util/Pagination';
import CatalogButtonGroup from '../util/CatalogButtonGroup';
import UsersGrid from './UsersGrid';
import UsersList from './UsersList';

const StyledListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Users = ({ users, page, isGrid, setIsGrid }) => (
  <>
    <Pagination pathname="members" page={page} />
    <StyledListHeader>
      <CatalogButtonGroup isGrid={isGrid} setIsGrid={setIsGrid} />
    </StyledListHeader>
    {isGrid && <UsersGrid users={users} />}
    {!isGrid && <UsersList users={users} />}
    <Pagination pathname="members" page={page} />
  </>
);

Users.propTypes = {
  users: PropTypes.array.isRequired,
  page: PropTypes.number,
  isGrid: PropTypes.bool.isRequired,
  setIsGrid: PropTypes.func.isRequired,
};

export default Users;
