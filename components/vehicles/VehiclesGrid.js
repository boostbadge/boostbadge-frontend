import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import Link from 'next/link';

const VehicleGrid = ({ vehicles }) => {
  const themeContext = useContext(ThemeContext);

  const StyledGridContainer = styled.div`
    display: grid;
    grid-gap: 40px;
    max-width: ${themeContext.maxWidth};
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  `;

  const StyledGridItem = styled.div`
    border: 1px solid ${themeContext.lightgrey};
    .cover-photo {
      width: 100%;
      overflow: hidden;
      img {
        display: block;
        width: 100%;
      }
    }
    .details {
      padding: 5px;
      h2,
      p {
        margin: 0;
        padding: 0;
      }
      h2 {
        border-bottom: 1px solid ${themeContext.orange};
      }
    }
  `;

  return (
    <StyledGridContainer>
      {vehicles.map(vehicle => (
        <StyledGridItem key={vehicle.id}>
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
        </StyledGridItem>
      ))}
    </StyledGridContainer>
  );
};

VehicleGrid.propTypes = {
  vehicles: PropTypes.array.isRequired,
};

export default VehicleGrid;
