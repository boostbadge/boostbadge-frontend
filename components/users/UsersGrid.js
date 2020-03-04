import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import Link from 'next/link';
import ProfilePhoto from './ProfilePhoto';
import Verified from './Verified';

const UsersGrid = ({ users }) => {
  const themeContext = useContext(ThemeContext);

  const StyledGridContainer = styled.div`
    display: grid;
    grid-gap: 40px;
    max-width: ${themeContext.maxWidth};
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  `;

  const StyledGridItem = styled.div`
    text-align: center;
    border: 1px solid ${themeContext.lightgrey};
    .cover-photo {
      width: 100%;
      overflow: hidden;
      img {
        display: block;
        width: 100%;
      }
    }
    .details {
      padding: 5px;
      h2,
      p {
        margin: 0;
        padding: 0;
      }
      h2 {
        border-bottom: 1px solid ${themeContext.orange};
      }
    }
  `;

  return (
    <StyledGridContainer>
      {users.map(user => (
        <StyledGridItem key={user.id}>
          <div className="cover-photo">
            <img src={user.coverPhotoThumbnail} alt={user.displayName} />
          </div>
          <div className="details">
            <ProfilePhoto
              src={user.profilePhotoThumbnail}
              alt={user.displayName}
              big={false}
              left={false}
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
        </StyledGridItem>
      ))}
    </StyledGridContainer>
  );
};

UsersGrid.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UsersGrid;
