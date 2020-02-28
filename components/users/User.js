import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import { CatalogContext } from '../util/Catalog';
import CoverPhoto from '../util/CoverPhoto';
import ProfilePhoto from '../util/ProfilePhoto';
import Verified from '../util/Verified';

const User = ({ user }) => {
  const isGrid = useContext(CatalogContext);

  const StyledMeta = styled.div`
    display: grid;
    grid-template-${isGrid ? `rows` : `columns`}: fit-content(100px) auto;
    align-items: ${!isGrid ? `center` : `start`};
    justify-items: ${isGrid ? `center` : `start`};
    ${isGrid && `text-align: center;`}
  `;

  return (
    <>
      <Link href={{ pathname: `/member`, query: { id: user.id } }}>
        <a>
          <CoverPhoto src={user.coverPhotoThumbnail} alt={user.displayName} />
        </a>
      </Link>
      <StyledMeta>
        <Link href={{ pathname: `/member`, query: { id: user.id } }}>
          <a>
            <ProfilePhoto
              src={user.profilePhotoThumbnail}
              alt={user.displayName}
              big={false}
              left={!isGrid}
            />
          </a>
        </Link>
        <div>
          <Link href={{ pathname: `/member`, query: { id: user.id } }}>
            <a>
              <h4>
                {user.displayName}
                <Verified verified={user.verified} />
              </h4>
            </a>
          </Link>
          <p>{`${user.firstName} ${user.lastName}`}</p>
        </div>
      </StyledMeta>
    </>
  );
};

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
