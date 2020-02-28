import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import CurrentUser from '../auth/CurrentUser';
import Logout from '../auth/Logout';

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  @media (max-width: 992px) {
    border-top: 1px solid ${props => props.theme.lightgrey};
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
  a,
  button {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    font-size: 16px;
    line-height: 35px;
    background: none;
    border: 0;
    cursor: pointer;
    color: ${props => props.theme.grey};
    transition: width 0.7s;
    @media (max-width: 992px) {
      margin: 1rem 0 1rem 0;
    }
    @media (max-width: 768px) {
      padding: 0 3rem 1rem 3rem;
      border-bottom: 1px solid ${props => props.theme.lightgrey};
    }
    &:after {
      height: 1px;
      background: ${props => props.theme.orange};
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover {
      color: ${props => props.theme.orange};
      outline: none;
    }
    &:focus {
      color: ${props => props.theme.orange};
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
`;

const Nav = () => (
  <CurrentUser>
    {({ data }) => {
      const getCurrentUser = data ? data.getCurrentUser : null;
      return (
        <NavStyles>
          <Link href="/shop">
            <a>Shop</a>
          </Link>
          <Link href="/members">
            <a>Members</a>
          </Link>
          <Link href="/vehicles">
            <a>Vehicles</a>
          </Link>
          {!getCurrentUser && (
            <React.Fragment>
              <Link href="/register">
                <a>Register</a>
              </Link>
              <Link href="/login">
                <a>Log In</a>
              </Link>
            </React.Fragment>
          )}
          {getCurrentUser && (
            <Link
              prefetch
              as={`/member/${getCurrentUser.username}`}
              href={{
                pathname: '/member',
                query: { id: getCurrentUser.id },
              }}
            >
              <a>My Garage</a>
            </Link>
          )}
          {getCurrentUser && <Logout />}
        </NavStyles>
      );
    }}
  </CurrentUser>
);

export default Nav;
