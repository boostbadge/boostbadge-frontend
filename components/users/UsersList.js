import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import Link from 'next/link';
import ProfilePhoto from './ProfilePhoto';
import Verified from './Verified';

const UsersList = ({ users }) => {
  const themeContext = useContext(ThemeContext);

  const StyledListContainer = styled.div`
    display: grid;
    grid-gap: 40px;
    max-width: ${themeContext.maxWidth};
  `;

  const StyledListItem = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 30px;
    border-bottom: 1px solid ${themeContext.lightgrey};
    .cover-photo {
      width: 300px;
      overflow: hidden;
      border: 1px solid ${themeContext.lightgrey};
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
      img {
        display: block;
        width: 300px;
        transition: all 0.4s;
        &:hover {
          -webkit-transform: scale(1.1);
          -moz-transform: scale(1.1);
          -o-transform: scale(1.1);
          -ms-transform: scale(1.1);
          transform: scale(1.1);
          -webkit-transition: all 0.5s ease-out;
          -moz-transition: all 0.5s ease-out;
          -ms-transition: all 0.5s ease-out;
          -o-transition: all 0.5s ease-out;
          transition: all 0.5 ease-out;
        }
      }
    }
    .details {
      flex-grow: 1;
      display: flex;
      padding: 5px;
      div {
        margin-left: 10px;
        h2,
        p {
          display: block;
          margin: 0;
          padding: 0;
        }
        h2 {
          border-bottom: 1px solid ${themeContext.orange};
        }
      }
    }
  `;

  return (
    <StyledListContainer>
      {users.map(user => (
        <StyledListItem key={user.id}>
          <div className="cover-photo">
            <img src={user.coverPhotoThumbnail} alt={user.displayName} />
          </div>
          <div className="details">
            <ProfilePhoto
              src={user.profilePhotoThumbnail}
              alt={user.displayName}
              big={false}
              left
            />
            <div>
              <Link href={{ pathname: `/member`, query: user.id }}>
                <a>
                  <h2>
                    {user.displayName}
                    <Verified verified={user.verified} />
                  </h2>
                </a>
              </Link>
              <p>{`${user.firstName} ${user.lastName}`}</p>
            </div>
          </div>
        </StyledListItem>
      ))}
    </StyledListContainer>
  );
};

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UsersList;
