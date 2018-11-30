import { PropTypes } from 'prop-types'
import styled, { css } from 'styled-components'
import { colors, media } from '../../style/theme'
import { Controller } from '../collapsible/Styled'

export const NavBarContainer = styled.div`
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

export const NavButton = styled.a`
  flex: 1;
  ${buttonStyle}
`

export const NavButtonController =  styled(Controller)`
  flex: 1;
  ${buttonStyle}
`