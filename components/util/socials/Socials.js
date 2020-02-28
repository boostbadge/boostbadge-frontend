import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Social from './Social';

const SocialsStyle = styled.div`
  padding: 5px 0 5px;
`;

const Socials = ({ twitter, instagram, facebook, youtube, vimeo }) => (
  <SocialsStyle>
    <Social type="twitter" url={twitter} />
    <Social type="instagram" url={instagram} />
    <Social type="facebook" url={facebook} />
    <Social type="youtube" url={youtube} />
    <Social type="vimeo" url={vimeo} />
  </SocialsStyle>
);

Socials.propTypes = {
  twitter: PropTypes.string,
  instagram: PropTypes.string,
  facebook: PropTypes.string,
  youtube: PropTypes.string,
  vimeo: PropTypes.string,
};

export default Socials;
