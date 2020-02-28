import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeaderStyles = styled.div`
  h1 {
    position: relative;
    font-size: 30px;
    font-weight: 700;
    line-height: 35px;
    color: #404040;
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }
`;
const PageHeader = ({ title }) => (
  <HeaderStyles>
    <h1>{title}</h1>
  </HeaderStyles>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
