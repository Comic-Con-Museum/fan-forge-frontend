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

export const ExhibitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 600px;
  height: 500px;
  box-shadow: 5px 8px 6px rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  margin-bottom: 40px;
`;

export const ExhibitTitle = styled.h1`
  color: #0072bc;
  font-family: Oswald;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.74px
  margin: 10px 0 0 10px;
`;

export const ExhibitDescriptionDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between
  width: 100%;
  height: 40%;
  padding: 10px;
`;

export const ExhibitDescriptionText = styled.p`
  color: #4d4d4d;
  font-family: "Helvetica Neue";
  font-size: 18px;
  font-weight: 300;
  letter-spacing: 0.18px;
`;

export const Tag = styled.div`
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #b4b8c5;
  background-color: #f7f7f7;
  color: #0072bc;
  font-family: Oswald;
  font-size: 10px;
  font-weight: 300;
  letter-spacing: 0.21px;
  text-transform: uppercase;
`;