import styled from 'styled-components';
import { PropTypes } from 'prop-types'; 

export const StyledCollapsibleContainer = styled.div.attrs({
    'aria-expanded': props => props.isCollapsed,
    'aria-hidden': props => !props.isCollapsed,
    'tabIndex': props => props.isCollapsed ? "0" : "-1",
  }) `
    transform-origin: right;
    transform: ${props => props.isCollapsed ? 'scaleX(1)' : 'scaleX(0)'}};
    transition: transform 0.3s ease-out;
`;

export const Controller = styled.a.attrs({
  'role': 'button',
  'tabIndex': '0',
  'aria-controls': props => props.controleeId,
  'aria-pressed': props => props.isControleeActive
})``;

Controller.propTypes = {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  controleeId: PropTypes.string.isRequired,
  isControleeActive: PropTypes.bool.isRequired,
};
