import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';

const StyledVehicle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-top: 8px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const StyledPhoto = styled.div`
  grid-column: 1/2;
  color: ${props => props.theme.offWhite};
  background-color: ${props => props.theme.lightgrey};
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    display: block;
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

const StyledMeta = styled.div`
  grid-column: 2/-1;
  color: ${props => props.theme.black};
  h2 {
    font-size: 20px;
    line-height: 22px;
    font-weight: 700;
    margin-top: 0;
    padding-top: 0;
    p {
      font-size: 16px;
      line-height: 20px;
      text-align: justify;
    }
  }
`;

class Vehicle extends Component {
  render() {
    const {
      vehicle: { id, featuredImage, nickname, blurb, year, make, model },
    } = this.props;
    const altNickname = `${year} ${make} ${model}`;
    return (
      <React.Fragment>
        <StyledVehicle>
          <Link
            href={{
              pathname: '/vehicle',
              query: { id },
            }}
          >
            <a>
              <StyledPhoto>
                <img src={featuredImage} alt={nickname} />
              </StyledPhoto>
            </a>
          </Link>
          <StyledMeta>
            <Link
              href={{
                pathname: '/vehicle',
                query: { id },
              }}
            >
              <a>
                <h2>{nickname || altNickname}</h2>
              </a>
            </Link>
            <p>{blurb}</p>
          </StyledMeta>
        </StyledVehicle>
      </React.Fragment>
    );
  }
}

Vehicle.propTypes = {
  vehicle: PropTypes.object.isRequired,
};

export default Vehicle;
