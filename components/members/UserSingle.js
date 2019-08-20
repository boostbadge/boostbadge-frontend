import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Moment from 'react-moment';
import Head from 'next/head';
import { Query } from 'react-apollo';
import Error from '../ErrorMessage';
import CoverPhoto from './CoverPhoto';
import ProfilePhoto from './ProfilePhoto';
import Verified from './Verified';
import Socials from '../socials/Socials';
import Vehicles from '../garage/Vehicles';
import { SINGLE_USER_QUERY } from '../../queries/SINGLE_USER_QUERY';

const StyledUser = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 2rem auto;
  border-bottom: 1px solid ${props => props.theme.lightgrey};
`;

const StyledMeta = styled.div`
  display: grid;
  grid-auto-columns: 240px 1fr;
  grid-auto-flow: column;
  grid-gap: 0;
  padding: 0 0 25px 0;
`;

const StyledDetails = styled.div`
  color: ${props => props.theme.grey};
`;

const StyledName = styled.div`
  font-size: 24px;
  line-height: 1.7em;
  font-weight: 700;
`;

const StyledJoined = styled.div`
  font-size: 14px;
  line-height: 1em;
  color: #999;
`;

const StyledDescription = styled.div`
  font-size: 13px;
  line-height: 1em;
  color: #999;
`;

const StyledFollows = styled.div`
  display: grid;
  grid-auto-columns: auto auto;
  grid-auto-flow: column;
  justify-content: start;
  grid-gap: 0;
  padding: 10px 0 30px 0;
  border-top: 1px solid ${props => props.theme.lightgrey};
  div {
    padding: 0 10px;
    text-align: center;
    border-right: 1px solid ${props => props.theme.lightgrey};
    h4 {
      color: ${props => props.theme.grey};
      text-transform: uppercase;
    }
    p {
      color: ${props => props.theme.orange};
    }
  }
`;

class UserSingle extends Component {
  render() {
    const { id } = this.props;
    return (
      <Query query={SINGLE_USER_QUERY} variables={{ id }}>
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.user) return <p>No Item Found for {id}</p>;
          const { user } = data;
          return (
            <StyledUser>
              <Head>
                <title>{user.username} | BOOSTBADGE</title>
              </Head>
              <CoverPhoto src={user.coverPhoto} username={user.username} isSingle />
              <StyledMeta>
                <ProfilePhoto src={user.profilePhoto} username={user.username} isSingle />
                <StyledDetails>
                  <StyledName>
                    {user.username}
                    <Verified verified={user.verified} />
                  </StyledName>
                  <StyledJoined>
                    Joined <Moment format="MMMM D, YYYY">{user.createdAt}</Moment>
                  </StyledJoined>
                  <Socials
                    twitter={user.twitter}
                    instagram={user.instagram}
                    facebook={user.facebook}
                    youtube={user.youtube}
                    vimeo={user.vimeo}
                  />
                  <StyledDescription>{user.description}</StyledDescription>
                </StyledDetails>
              </StyledMeta>
              <StyledFollows>
                <div>
                  <h4>Followers</h4>
                  <p>1</p>
                </div>
                <div>
                  <h4>Following</h4>
                  <p>1</p>
                </div>
              </StyledFollows>
              <Vehicles vehicles={user.vehicles} />
            </StyledUser>
          );
        }}
      </Query>
    );
  }
}

UserSingle.propTypes = {
  id: PropTypes.string.isRequired,
};

export default UserSingle;
