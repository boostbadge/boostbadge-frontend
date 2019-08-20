import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class CoverPhoto extends Component {
  render() {
    const { src, username, isSingle } = this.props;
    const StyledCoverPhoto = styled.div`
      height: ${isSingle ? 370 : 123}px;
      background-color: ${props => props.theme.lightgrey};
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `;
    return <StyledCoverPhoto>{src.substring(src.length - 4) !== 'null' ? <img src={src} alt={username} /> : null}</StyledCoverPhoto>;
  }
}

CoverPhoto.propTypes = {
  src: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  isSingle: PropTypes.bool.isRequired,
};

export default CoverPhoto;
