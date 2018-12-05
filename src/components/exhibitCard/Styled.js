import styled from 'styled-components';

export const ExhibitContainer = styled.div.attrs({
  'tabIndex': "2",
})`
  margin: 0 0 15px;
  width: 325px;
  order: 1;
  height: 300px;
  box-shadow: 5px 8px 6px rgba(0, 0, 0, 0.16);
  background-color: ${props => props.active ? 'yellow' : 'white'};
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.75s ease;
  text-decoration: none;
  color: black;
  
  :hover {
    background-color: yellow;

    .likeButton {
      fill: black;
    }
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
  height: 50px;
  font-size: 24px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
`

export const LikeImg = styled.img`
  height: 30px;
  margin-right: 10px;
`
export const Supporters = styled.div`
  float: left;
  display: flex;
  padding: 0 8px;
  align-items: center;
  font-weight: bold;
`

export const Featured = styled.div`
  float: right;
  padding: 10px;
`