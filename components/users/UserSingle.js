import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Moment from 'react-moment';
import Head from 'next/head';
import { Query } from 'react-apollo';
import Error from '../util/ErrorMessage';
import CoverPhoto from '../util/CoverPhoto';
import ProfilePhoto from '../util/ProfilePhoto';
import Verified from '../util/Verified';
import Socials from '../util/socials/Socials';
import VehicleList from '../vehicles/VehicleList';
import { GET_USER_QUERY } from '../../queries/GET_USER_QUERY';

const StyledUser = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 2rem auto;
  padding: 0 0 25px 0;
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

class UserSingle extends Component {
  render() {
    const { id } = this.props;
    return (
      <Query query={GET_USER_QUERY} variables={{ id }}>
        {({ error, loading, data }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          if (!data.getUser) return <p>No Item Found for {id}</p>;
          const { getUser } = data;
          return (
            <StyledUser>
              <Head>
                <title>{getUser.displayName} | BOOSTBADGE</title>
              </Head>
              <CoverPhoto
                src={getUser.coverPhoto}
                displayName={getUser.displayName}
                isSingle
              />
              <StyledMeta>
                <ProfilePhoto
                  src={getUser.profilePhoto}
                  displayName={getUser.displayName}
                  isSingle
                />
                <StyledDetails>
                  <StyledName>
                    {getUser.displayName}
                    <Verified verified={getUser.verified} />
                  </StyledName>
                  <StyledJoined>
                    Joined{' '}
                    <Moment format="MMMM D, YYYY">{getUser.createdAt}</Moment>
                  </StyledJoined>
                  <Socials
                    twitter={getUser.twitter}
                    instagram={getUser.instagram}
                    facebook={getUser.facebook}
                    youtube={getUser.youtube}
                    vimeo={getUser.vimeo}
                  />
                  <StyledDescription>{getUser.description}</StyledDescription>
                </StyledDetails>
              </StyledMeta>
              <VehicleList vehicles={getUser.vehicles} />
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
