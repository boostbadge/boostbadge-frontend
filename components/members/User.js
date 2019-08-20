import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import CoverPhoto from './CoverPhoto';
import ProfilePhoto from './ProfilePhoto';
import Verified from './Verified';

const StyledUser = styled.div`
  box-sizing: border-box;
  margin-bottom: 40px;
  background: white;
  border: 1px solid ${props => props.theme.lightgrey};
`;

const ProfileMeta = styled.div`
  display: grid;
  grid-auto-columns: 140px 1fr;
  grid-auto-flow: column;
  grid-gap: 0;
  padding: 0 0 25px 0;
`;

const ProfileDetails = styled.div`
  color: ${props => props.theme.grey};
`;

const ProfileName = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
`;

class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <StyledUser>
        <Link
          href={{
            pathname: '/member',
            query: { id: user.id },
          }}
        >
          <a>{<CoverPhoto src={user.coverPhoto} username={user.username} isSingle={false} />}</a>
        </Link>
        <ProfileMeta>
          <Link
            href={{
              pathname: '/member',
              query: { id: user.id },
            }}
          >
            <a>
              <ProfilePhoto src={user.profilePhoto} username={user.username} isSingle={false} />
            </a>
          </Link>
          <ProfileDetails>
            <Link
              href={{
                pathname: '/member',
                query: { id: user.id },
              }}
            >
              <a>
                <ProfileName>
                  {user.username}
                  <Verified verified={user.verified} />
                </ProfileName>
              </a>
            </Link>
          </ProfileDetails>
        </ProfileMeta>
      </StyledUser>
    );
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
