import styled from 'styled-components';

export const ExhibitContainer = styled.div`
  margin: 15px 0;
  width: 325px;
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
  max-height: 100%;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`


export const ImgContainer = styled.div`
  height: 200px;
`

export const ExhibitTitle = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const Description = styled.p`
  overflow: hidden;
  position: relative;
  line-height: 1.2em;
  max-height: 3.6em;
  text-align: justify;
  margin-right: -1em;
  padding-right: 1em;

  // this is to truncate the additional text
  :before {
    content: '...';
    position: absolute;
    right: 0;
    bottom: 0;
  }
  // this too
  :after {
    content: '';
    position: absolute;
    right: 0;
    width: 1em;
    height: 1em;
    margin-top: 0.2em;
    background: yellow;
  }
`