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

export const ActionContainer = styled.div`
display: flex;
justify-content: center;
width:100%
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: black;
`;

export const SubmitLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
`;

export const SubmitButton = styled.button`
  font-size: 16px;
  font-weight: 700;
  font-family: "Helvetica Neue";
  padding: 0;
  height: 50%;
  background-color: yellow;
  width: 100%;
  border: none;
`;
export const LoginButton = styled.button`
  font-size: 16px;
  font-weight: 700;
  font-family: "Helvetica Neue";
  padding: 0;
  height: 50%;
  background-color: darkgrey;
  color: yellow;
  border: none;
`;