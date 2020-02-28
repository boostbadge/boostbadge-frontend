import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import Link from 'next/link';
import { CatalogContext } from '../util/Catalog';
import CoverPhoto from '../util/CoverPhoto';

const Vehicle = ({ vehicle }) => {
  const isGrid = useContext(CatalogContext);
  const themeContext = useContext(ThemeContext);

  const StyledMeta = styled.div`
    ${isGrid && `text-align: center;`}
    h2 {
      margin-top: 0;
      padding-top: 0;
      ${!isGrid && `border-bottom: 1px solid ${themeContext.orange}`};
    }
  `;

  const {
    id,
    featuredImage,
    nickname,
    description,
    year,
    make,
    model,
  } = vehicle;
  const altNickname = `${year} ${make} ${model}`;
  return (
    <>
      <Link href={{ pathname: `/vehicle`, query: { id } }}>
        <a>
          <CoverPhoto src={featuredImage} alt={nickname || altNickname} />
        </a>
      </Link>
      <StyledMeta>
        <Link href={{ pathname: `/vehicle`, query: { id } }}>
          <a>
            <h2>{nickname || altNickname}</h2>
          </a>
        </Link>
        <p>{description}</p>
      </StyledMeta>
    </>
  );
};

Vehicle.propTypes = {
  vehicle: PropTypes.object.isRequired,
};

export default Vehicle;
