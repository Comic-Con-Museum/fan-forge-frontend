  import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: #f7f7f7;
`;

export const ExhibitList = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  box-sizing: border-box;
  width: 100%;
  padding: 50px;
`;

export const ExhibitContainer = styled.div`
  margin: 15px;
  width: 325px;
  height: ${({open}) => (open ? '400px' : '300px')};
  box-shadow: 5px 8px 6px rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  border-radius: 5px;
  overflow: hidden;
  align-content: flex-start;
  align-items: flex-start;
  transition: height .5s;

  :hover {
    background-color: yellow;
  }
`;

export const ImgContainer = styled.div`
  height: 200px;
`;

export const ExhibitImg = styled.img`
  max-height: 100%;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const ExhibitTitle = styled.h3`

`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.p``;