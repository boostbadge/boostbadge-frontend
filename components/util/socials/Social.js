import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';

const twitter = '#0084b4';
const instagram = '#e1306c';
const facebook = '#3c5a99';
const youtube = '#ff0000';
const vimeo = '#1ab7ea';

const Social = ({ type, url }) => {
  if (!url) return null;

  const StyledCircleIcon = styled.i`
    color: ${(type === 'twitter' && twitter) ||
      (type === 'instagram' && instagram) ||
      (type === 'facebook' && facebook) ||
      (type === 'youtube' && youtube) ||
      (type === 'vimeo' && vimeo)};
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
  `;

  const StyledSocialIcon = styled.i`
    transition: all 0.4s;
    &:hover {
      transform: scale(1.25);
    }
  `;

  return (
    <Link href="/">
      <a>
        <span className="fa-stack fa-lg">
          <StyledCircleIcon className="fa fa-circle fa-stack-2x" />
          <StyledSocialIcon
            className={`fa fa-${type} fa-stack-1x fa-inverse`}
          />
        </span>
      </a>
    </Link>
  );
};

Social.propTypes = {
  type: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default Social;
