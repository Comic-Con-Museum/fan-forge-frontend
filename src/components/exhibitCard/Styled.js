import styled from 'styled-components';

export const ExhibitContainer = styled.div.attrs({
  'tabIndex': "2",
})`
  margin: 0 0 15px;
  width: 325px;
  order: 1;
  height: ${({open}) => (open ? '400px' : '300px')};
  box-shadow: 5px 8px 6px rgba(0, 0, 0, 0.16);
  background-color: ${({open}) => (open ? 'yellow' : '#ffffff')};
  border-radius: 5px;
  overflow: hidden;
  transition: height .5s;

  :hover {
    background-color: yellow;
  }
`

export const ExhibitImg = styled.img`
  height: 200px;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

export const ExhibitTitle = styled.div`
  padding: 5px;
  font-size: 24px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 50px;
`

export const Supporters = styled.div`
  float: left;
  padding: 10px;
`

export const Featured = styled.div`
  float: right;
  padding: 10px;
`