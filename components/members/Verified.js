import styled from 'styled-components';
import PropTypes from 'prop-types';

const VerifiedStyles = styled.i`
  margin: 0 8px;
  font-size: 18px;
  height: 18px;
  line-height: 18px;
  color: #5ea5e7;
  cursor: pointer;
`;

const Verified = ({ verified }) => {
  if (!verified) return null;
  return <VerifiedStyles className="fa fa-check-circle" aria-hidden="true" original-title="Verified Account" />;
};

Verified.propTypes = {
  verified: PropTypes.bool.isRequired,
};

export default Verified;
