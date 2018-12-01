import styled from 'styled-components';

export const FeedContainer = styled.div`
  flex: 1;
`

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

export const Pagination = styled.div`
  display: ${props => props.hidden ? 'none': 'flex'};
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`

export const PageNumber = styled.div`
  background-color: white;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 13px 10px;
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 3px 3px 7px rgba(0,0,0,0.16);
`

export const PageNavigate = styled.div.attrs({
  'tabIndex': '0',
  'aria-label': props => props.label,
})`
  background-color: yellow;
  height: 38px;
  display: flex;
  align-items: center;
  padding: 7px 10px 11px;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  width: 70px;
  justify-content: center;
  box-shadow: 3px 3px 7px rgba(0,0,0,0.16);
  visibility: ${props => props.hidden ? 'hidden': 'auto'};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`