import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProfilePhoto = ({ src, alt, big, left }) => {
  const StyledProfilePhoto = styled.div`
    img {
      left: ${big ? 30 : 0}px;
      background: white;
      border: 5px solid white;
      border-radius: 999px;
      position: relative;
      ${left ? `left` : `top`}: ${big ? -95 : -45}px;
      ${left ? `margin-right` : `margin-bottom`}: ${big ? -95 : -45}px;
      width: ${big ? 190 : 90}px;
      height: ${big ? 190 : 90}px;
      float: none;
      opacity: 1;
      display: inline;
    }
  `;
  return (
    <StyledProfilePhoto>
      <img src={src} alt={alt} />
    </StyledProfilePhoto>
  );
};

ProfilePhoto.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  big: PropTypes.bool,
  left: PropTypes.bool,
};

export default ProfilePhoto;
