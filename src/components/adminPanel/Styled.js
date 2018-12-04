import styled from 'styled-components';

export const AdminPanelWrapper = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 32px;
`;


// ADMIN FEED ELEMENTS
export const Wrapper = styled.table`
  background-color: white;
  border-collapse: collapse;
  width: 50%;
  margin: 10px;
`;

export const Row = styled.tr`
  border-bottom: lightblue solid 1px;
  margin: 10px;
`;

export const Header = styled.th`
  border-bottom: 1px solid yellow;
  text-align: left;
  padding: 8px;
`;

export const Data = styled.td`
  border: 1px solid #red;
  text-align: left;
  padding: 16px 24px;
`;

export const DataModelWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: centerl
`;

export const Controller = styled.div`
  padding: 0 20px;
  background-color: white;
  width: min-content;
`;
