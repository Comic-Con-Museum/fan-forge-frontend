import styled from 'styled-components';

export const CommentsWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  background-color: white;
  height: 100%;
  overflow: auto;
  z-index: 50;

  display: flex;
  flex-direction: column;
  border-left: 1px solid black;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  transform-origin: right;
  transition: transform 0.3s ease-out;
  transform: ${props => props.show ? 'scaleX(1)' : 'scaleX(0)'}};
`;

export const CommentInput = styled.div`
  padding: 5px 25px 10px;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: column;
`

export const CommentBox = styled.textarea`
  flex: 1;
  height: 80px;
  font-size: 16px;
  resize: none;
  width: 100% !important;
  padding: 0;
  transition: all 0.5s ease;
`//TODO: change important

export const SendComment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  text-align: center;
  height: 30px;
  width: 100%;
  color: white;
  font-weight: bold;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding-right: 2px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: yellow;
    color: black;
  }
`

export const CommentList = styled.div`
  overflow: auto;
  height: 75%;
`

export const CommentDiv = styled.div`
  padding: 15px 25px;
  font-size: 17px;
`;

export const CommentTitle = styled.p`
  font-weight: 800;
  padding: 25px;
  font-size: 20px;
`

export const CommentInfo = styled.div`
  display: flex;
  margin-top: 5px;
  font-size: 14px;
  font-weight: 500;
  justify-content: space-between;
  font-style: italic;
`