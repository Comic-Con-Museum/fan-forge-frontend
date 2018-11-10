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
  display: flex;
  margin: 15px;
  width: 325px;
  height: 350px;
  box-shadow: 5px 8px 6px rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
`;
