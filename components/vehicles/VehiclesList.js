import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import Link from 'next/link';

const VehicleList = ({ vehicles }) => {
  const themeContext = useContext(ThemeContext);

  const StyledListContainer = styled.div`
    display: grid;
    grid-gap: 40px;
    max-width: ${themeContext.maxWidth};
    grid-auto-rows: 230px;
  `;

  const StyledListItem = styled.div`
    display: flex;
    padding-bottom: 30px;
    border-bottom: 1px solid ${themeContext.lightgrey};
    .cover-photo {
      height: 200px;
      width: 200px;
      margin-right: 10px;
      overflow: hidden;
      border: 1px solid ${themeContext.lightgrey};
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
      img {
        display: block;
        height: 200px;
        width: 200px;
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
    }
    .details {
      flex-grow: 1;
      padding: 5px;
      h2,
      p {
        display: block;
        margin: 0;
        padding: 0;
      }
      h2 {
        border-bottom: 1px solid ${themeContext.orange};
      }
    }
  `;

  return (
    <StyledListContainer>
      {vehicles.map(vehicle => (
        <StyledListItem key={vehicle.id}>
          <div className="cover-photo">
            <Link href={{ pathname: `/vehicle`, query: vehicle.id }}>
              <a>
                <img
                  src={vehicle.featuredImageCover}
                  alt={
                    vehicle.nickname ||
                    `${vehicle.year} ${vehicle.make} ${vehicle.model}`
                  }
                />
              </a>
            </Link>
          </div>
          <div className="details">
            <Link href={{ pathname: `/vehicle`, query: vehicle.id }}>
              <a>
                <h2>
                  {vehicle.nickname ||
                    `${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                </h2>
              </a>
            </Link>
            <p>{vehicle.description}</p>
          </div>
        </StyledListItem>
      ))}
    </StyledListContainer>
  );
};

VehicleList.propTypes = {
  vehicles: PropTypes.array.isRequired,
};

export default VehicleList;
