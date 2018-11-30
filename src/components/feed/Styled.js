import styled from 'styled-components';


export const PageChanger = styled.a`
  position: absolute;
  top: 50px;
  ${({next}) => (next ? 'right' : 'left')}: 30px;
  cursor: pointer;

  &:before {
    font-size: 24px;
    content: \'${({next}) => next ? ">" : "<"}\';
  }
`

export const ExhibitList = styled.div`
  flex: 1;
  padding: 0px 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
`