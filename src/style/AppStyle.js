import styled from 'styled-components';
import { colors, media } from './theme';

export const Main = styled.main`
  display: flex;
  padding: 15px;
`;

export const CenterContainer = styled.div`
  padding: 0px 10px;
  width: calc(100vw - 177px);
`;

export const FullPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const MobileNav = styled.div`
  position: absolute;
  width: 100vw;
  bottom: 0;
  left: 0;
`