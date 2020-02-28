import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const StyledButtonGroup = styled.div`
  display: inline-flex;
  border: 1px solid ${props => props.theme.black};
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 10px;
  button:last-child {
    border-right: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  button {
    color: ${props => props.theme.black};
    font-weight: 700;
    font-size: 1.25rem;
    text-align: center;
    padding: 0.5em 1em;
    display: inline-block;
    border: none;
    border-radius: 0;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    border-right: 1px solid ${props => props.theme.black};
    cursor: pointer;
    opacity: 0.5;
    &:disabled {
      color: ${props => props.theme.orange};
      opacity: 1;
      cursor: default;
    }
  }
`;

const ButtonGroup = ({ children }) => (
  <StyledButtonGroup>{children}</StyledButtonGroup>
);

ButtonGroup.propTypes = { children: PropTypes.node.isRequired };

export default ButtonGroup;
