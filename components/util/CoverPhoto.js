import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CoverPhoto = ({ src, displayName }) => {
  const StyledCoverPhoto = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
  `;
  return (
    <StyledCoverPhoto>
      <img src={src} alt={displayName} />
    </StyledCoverPhoto>
  );
};

CoverPhoto.propTypes = {
  src: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
};

export default CoverPhoto;
