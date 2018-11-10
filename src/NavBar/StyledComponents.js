import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoImg = styled.img`
  height: 100px;
  width: auto;
  margin-right: 10px;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: calc(90% - 100px);
  background-color: black;
`;

export const SubmitLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
`;

export const SubmitButton = styled.button`
  height: 50%;
  background-color: yellow;
  width: 100%;
`;