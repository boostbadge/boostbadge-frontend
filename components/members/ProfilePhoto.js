import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class ProfilePhoto extends Component {
  render() {
    const { src, username, isSingle } = this.props;
    const defaultSrc = 'https://boostbadge.com/wp-content/plugins/ultimate-member/assets/img/default_avatar.jpg';
    const StyledProfilePhoto = styled.div`
      img {
        left: 30px;
        background: white;
        border: 5px solid white;
        border-radius: 999px;
        position: relative;
        margin-bottom: ${isSingle ? -95 : -45}px;
        width: ${isSingle ? 190 : 90}px;
        height: ${isSingle ? 190 : 90}px;
        top: ${isSingle ? -95 : -45}px;
        float: none;
        opacity: 1;
        display: inline;
      }
    `;
    return (
      <StyledProfilePhoto>
        <img src={src.substring(src.length - 4) !== 'null' ? src : defaultSrc} alt={username} />
      </StyledProfilePhoto>
    );
  }
}

ProfilePhoto.propTypes = {
  src: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  isSingle: PropTypes.bool.isRequired,
};

export default ProfilePhoto;
