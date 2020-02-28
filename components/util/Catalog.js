import React, { createContext, useContext, useState } from 'react';
import { PropTypes } from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import ButtonGroup from './ButtonGroup';

export const CatalogContext = createContext();

const Catalog = ({ children }) => {
  const themeContext = useContext(ThemeContext);
  const [isGrid, setIsGrid] = useState(1);

  const StyledContainer = styled.div`
    display: grid;
    grid-gap: 40px;
    max-width: ${themeContext.maxWidth};
    grid-template-columns: ${isGrid ? `repeat(3, minmax(0, 1fr))` : `1fr`};
  `;

  const StyledItem = styled.div`
    display: grid;
    grid-gap: 20px;
    ${isGrid && `grid-template-rows: 122px auto`};
    ${!isGrid && `grid-template-columns: 1fr 3fr`};
    ${isGrid && `border: 1px solid ${themeContext.lightgrey}`};
    ${!isGrid && `border-bottom: 1px solid ${themeContext.lightgrey}`};
    ${!isGrid && `padding-bottom: 30px;`}
  `;

  return (
    <>
      <ButtonGroup>
        <button
          type="button"
          disabled={isGrid}
          onClick={() => setIsGrid(!isGrid)}
        >
          Grid
        </button>
        <button
          type="button"
          disabled={!isGrid}
          onClick={() => setIsGrid(!isGrid)}
        >
          List
        </button>
      </ButtonGroup>
      <CatalogContext.Provider value={isGrid}>
        <StyledContainer>
          {children.map((child, i) => (
            <StyledItem key={i}>{child}</StyledItem>
          ))}
        </StyledContainer>
      </CatalogContext.Provider>
    </>
  );
};

Catalog.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Catalog;
