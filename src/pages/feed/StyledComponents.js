import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: #f7f7f7;
`;

export const Title = styled.h1`
  color: #0072bc;
  font-family: Oswald;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 1.8px;
`;

export const ControlCard = styled.div`
  width: 390px;
  height: 348px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  margin-right: 40px;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ExhibitList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchInput = styled.input`
  border: none;
  text-align: center;
  box-sizing: border-box;
  border-bottom: 1px solid #707070;
  height: 30px;
  width: calc(100% - 40px);
  margin: 10px 20px;
  color: #b4b8c5;
  outline: none;
`;