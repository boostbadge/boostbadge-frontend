import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Logo = styled.div`
  margin: 2rem 0 2rem 2rem;
  position: relative;
  z-index: 2;
  a {
    padding: 0.5rem 1rem;
    img {
      max-height: 62px;
      max-width: 100%;
    }
  }
  @media (max-width: 992px) {
    margin: 2rem 0 2rem 0rem;
    text-align: center;
  }
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 1px solid ${props => props.theme.bs};
    webkit-box-shadow: ${props => props.theme.bs};
    box-shadow: ${props => props.theme.bs};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>
            <img src="/boostbadge-logo.png" alt="BOOSTBADGE" />
          </a>
        </Link>
      </Logo>
      <Nav />
    </div>
  </StyledHeader>
);

export default Header;
