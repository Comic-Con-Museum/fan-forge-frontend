import styled from 'styled-components';
import { colors, media } from './theme';

export const Main = styled.main`
  display: flex;
`;

export const SideContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 88px;
`;

export const LogoImg = styled.img`
  height: 100px;
  width: auto;
  margin-right: 10px;
  ${media.mobile`display:none;`};
`;