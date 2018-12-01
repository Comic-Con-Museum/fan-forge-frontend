import styled from 'styled-components';

export const ComponentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  box-shadow: 5px 8px 6px rgba(0, 0, 0, 0.16);
  height: calc(90vh);
  width: calc(100% - 60px);
  background: white;
  position: relative;
`;

export const CarouselDiv = styled.div`
  height: 50vh;
  background-color: black;
`;

export const InformationDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  width: 25%;
`;

export const DescriptionAndExtrasDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40vh;
  width: 100%;
`;

export const DescriptionColumns = styled.div`
  width: 7g0%;
  -webkit-column-count: 3; /* Chrome, Safari, Opera */
  -moz-column-count: 3; /* Firefox */
  column-count: 3;
`;

export const CommentsButton = styled.button`
  outline: none;
  border: none;
  background-color: yellow;
  color: black;
  padding: 10px 20px;
  height: 40px;
  font-weight: 500;
`;

export const CommentsWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  background-color: rgba(255,255,0,.95);
  height: 100%;
  padding: 20px;
  overflow: auto;
`;

export const CommentDiv = styled.div`
  padding: 5px;
  background-color: lightgrey;
  border-radius: 8px;
  margin-bottom: 20px;
  p {
    margin: 0;
  }
`;

export const ExtrasDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const TagsDiv = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
`;

export const Tag = styled.button`
  background-color: yellow;
  margin-left: 10px;
  border: none;
  font-weight: 500;
  font-size: 14px;
`;

export const LikesDiv = styled.div`
  margin-left: 20px;
`;

export const CommentsCloseButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: fixed;
  top: 10;
  right: 15px;
`;