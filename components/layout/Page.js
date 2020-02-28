import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
  maxWidth: '1110px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  orange: '#FF4B00',
  black: '#393939',
  red: '#FF0000',
  grey: '#555555',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Lato', Helvetica, sans-serif;
    font-weight: normal;
    font-style: normal;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body, h4, p {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }`;

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

class Page extends Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <StyledPage>
            <Meta />
            <Header />
            <Inner>{children}</Inner>
          </StyledPage>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

Page.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Page;
