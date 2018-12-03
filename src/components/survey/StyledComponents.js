import styled from 'styled-components';

export const SubmitForm = styled.div`
  background-color: #f7f7f7;
  padding: 50px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  width: 500px;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const FieldGroup = styled.div`
  width: 100%;
  margin: 25px 0;
`;

export const SubmitButton = styled.button`
  margin: 35px 0 0;
  width: 100%;
  background-color: yellow;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
  border: 0;
  padding: 5px;
  box-shadow: 0 2px 13px rgba(0,0,0,0.15);
  cursor: pointer;
`;

export const LabelRow = styled.div`
   margin-bottom: 12px;
`;

export const CheckboxRow = styled.div`
   display: flex;
   justify-content: space-between;
`;

export const AlreadySupported = styled.p`
  color: red;
`;
