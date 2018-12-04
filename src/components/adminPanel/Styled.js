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
  border: 2px solid black;
  border-collapse: collapse;
`;

export const Row = styled.tr`
  &:nth-child(even) {
    background-color: #dddddd;
  }

  height: 10px;
`;

export const Header = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

export const Data = styled.td`
  border: 1px solid #red;
  text-align: left;
  padding: 8px;
`;

