import styled from 'styled-components';

export const ExhibitContainer = styled.div.attrs({
  'tabIndex': "2",
})`
  margin: 0 0 15px;
  width: ${props => props.active ? '0px' :'325px'};
  transform: ${props => props.active ? 'scaleX(0)' : 'scaleX(1)'};
  order: 1;
  height: 300px;
  box-shadow: 5px 8px 6px rgba(0, 0, 0, 0.16);
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  transition: all .5s;
  text-decoration: none;
  color: black;
  
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