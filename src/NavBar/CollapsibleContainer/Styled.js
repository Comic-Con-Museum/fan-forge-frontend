import styled from 'styled-components';

export const StyledCollapsibleContainer = styled.div.attrs({
    'aria-expanded': props => props.isCollapsed,
    'aria-hidden': props => !props.isCollapsed,
    'tabIndex': props => props.isCollapsed ? "0" : "-1",
  }) `
    transform-origin: top;
    transform: ${props => props.isCollapsed ? 'scaleY(1)' : 'scaleY(0)'}};
    transition: transform 0.3s ease-out;
`;  