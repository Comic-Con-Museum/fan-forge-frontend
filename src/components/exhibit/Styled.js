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
  padding: 20px 0 20px 20px;
  line-height: 1.2em;
`;

export const DescriptionAndExtrasDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40vh;
  width: 100%;
`;

export const DescriptionColumns = styled.div`
  -webkit-column-count: 3; /* Chrome, Safari, Opera */
  -moz-column-count: 3; /* Firefox */
  column-count: 3;
  padding: 30px;
  line-height: 1.2em;
`;

export const CommentsButton = styled.button`
  outline: none;
  border: none;
  background-color: yellow;
  color: black;
  padding: 10px 20px;
  height: 60px;
  font-weight: 700;
  border-top-left-radius: 5px;
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
  flex-wrap: wrap;
  font-weight: 500;
  font-size: 14px;
`;

export const Tag = styled.button`
  background-color: yellow;
  margin-left: 10px;
  border: none;
  font-weight: 700;
  font-size: 14px;
`;

export const LikesDiv = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;
  font-weight: 700;
`;

export const LikesImg = styled.img`
  height: 30px;
  width: auto;
  cursor: pointer;
  margin-left: 5px;
`;

export const CommentsCloseButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: fixed;
  top: 10;
  right: 15px;
`;