import styled from 'styled-components';

export const AdminPanelWrapper = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 70px;
  text-align: center;
  color: yellow;
  -webkit-text-stroke: 2px red;
  font-weight: bold;
  margin: 30px;

  ${({small}) => small ? `
  font-size: 40px;
  -webkit-text-stroke: 1px red;
  `: ''}
`;

export const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  right: 0;
`;

export const FeatureButton = styled.button`
  padding: 15px;
  background-color: yellow;
`;

export const DeleteButton = styled.button`
  padding: 15px;
  background-color: red;
`;

export const BackButton = styled.button`
  padding: 15px;
  background-color: grey;
`;

// ADMIN FEED ELEMENTS
export const Wrapper = styled.table`
  background-color: white;
  border-collapse: collapse;
  box-shadow: 2px 0px 5px rgba(0,0,0,0.56);
  border-radius: 5px;
`;

export const Row = styled.tr`
  &:not(:first-child) {
    border-top: red solid 2px;
  }
  margin: 10px;
`;

export const Header = styled.th`
  text-align: left;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;

`;

export const Data = styled.td`
  line-height: 1.2em;
  text-align: left;
  padding: 16px 24px;
  max-height: 100px;
`;

export const DataModelWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: centerl
`;

export const Controller = styled.div`
  width: 100%;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.h5`
  font-weight: bold;
  text-align: center;
  color: white;
`;