import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  min-height: calc(100vh - 100px);
`;

export const Card = styled.div`
  box-shadow: 5px 8px 6px rgba(0, 0, 0, 0.16);
  height: calc(100vh - 160px);
  width: calc(100% - 60px);
  background: white;
`;

export const CarouselDiv = styled.div`
  height: 65%;
  background-color: black;
`;

export const InformationDiv = styled.div`
  display: flex;

`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  width: 20%;
  padding: 25px 20px;
`;
