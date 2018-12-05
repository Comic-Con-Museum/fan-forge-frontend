import { PropTypes } from 'prop-types'
import styled, { css } from 'styled-components'
import { colors, media } from '../../style/theme'
import { Controller } from '../collapsible/Styled'

export const NavBarContainer = styled.div.attrs({
  'tabIndex': "1",
})`
  display: flex;
  flex-direction: ${props => props.direction};
  width: 100%;
  box-shadow: 5px 8px 6px rgba(0,0,0,0.16);
`

const buttonStyle = css`
  font-size: 16px;
  font-weight: 700;
  padding: 15px;
  background-color: ${props => props.yellow ? 'yellow' : 'white'};
  color: black;
  border: none;
  text-align: center;
`

export const NavButton = styled.button`
  flex: 1;
  ${buttonStyle}
`

export const NavButtonController =  styled(Controller).attrs({
  'tabIndex': "1"
})`
  flex: 1;
  ${buttonStyle}
  transition: all 0.3s ease;
  color: ${props => props.black ? 'white': 'black'};
  background-color: ${props => props.black ? 'black' : 'white'};
`

export const MobileNav = styled.div`
  position: absolute;
  width: 100vw;
  bottom: 0;
  left: 0;
`
