import styled from 'styled-components';

export const SubmitForm = styled.div`
  background-color: #f7f7f7;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const FieldGroup = styled.div`
  width: 400px;
  margin: 5px;
  padding: 10px;
`;

export const SubmitButton = styled.button`
  width: 100px;
  margin: 10px;
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
