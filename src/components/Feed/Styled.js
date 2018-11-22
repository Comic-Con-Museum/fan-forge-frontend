import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: #f7f7f7;
  position: relative;
`;

export const PageChanger = styled.a`
  position: absolute;
  top: 50px;
  ${({next}) => (next ? 'right' : 'left')}: 30px;
  cursor: pointer;

  &:before {
    font-size: 24px;
    content: \'${({next}) => next ? ">" : "<"}\';
  }
`;

export const ExhibitList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  box-sizing: border-box;
  width: 100%;
  padding: 50px;
`;