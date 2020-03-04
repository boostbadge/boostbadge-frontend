import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const StyledButtonGroup = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid ${props => props.theme.black};
  overflow: hidden;
  border-radius: 10px;
  button:last-child {
    border-right: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  button {
    color: ${props => props.theme.black};
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 2;
    text-align: center;
    padding: 0.5em 1em;
    display: inline-block;
    border: none;
    border-radius: 0;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    border-right: 1px solid ${props => props.theme.lightgrey};
    cursor: pointer;
    opacity: 0.5;
    &:disabled {
      color: ${props => props.theme.orange};
      opacity: 1;
      cursor: default;
    }
  }
`;

const CatalogButtonGroup = ({ isGrid, setIsGrid }) => (
  <StyledButtonGroup>
    <button type="button" disabled={isGrid} onClick={() => setIsGrid(!isGrid)}>
      Grid
    </button>
    <button type="button" disabled={!isGrid} onClick={() => setIsGrid(!isGrid)}>
      List
    </button>
  </StyledButtonGroup>
);

CatalogButtonGroup.propTypes = {
  isGrid: PropTypes.bool.isRequired,
  setIsGrid: PropTypes.func.isRequired,
};

export default CatalogButtonGroup;
