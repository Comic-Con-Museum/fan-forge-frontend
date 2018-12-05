import styled from 'styled-components'
import { colors } from '../../style/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 1000px;
  align-items:  ${props => props.flipped ? 'flex-end' : 'flex-start'};
  justify-content: space-around;
  flex-grow: 0;
  flex-shrink: 0;
  flex: 1;
`

export const TitleText = styled.p`
  font-size: 70px;
  font-weight: bold;
  text-transform: uppercase;
  writing-mode: vertical-rl;
  color: ${colors.yellow_1};
  font-family: 'Roboto Condensed', sans-serif;
  transform: ${props => props.flipped ? '' : 'rotate(180deg)'};
`