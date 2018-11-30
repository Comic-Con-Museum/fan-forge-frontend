import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  min-height: calc(100vh - 100px);
`;

export const Card = styled.div`
  box-shadow: 5px 8px 6px rgba(0, 0, 0, 0.16);
  height: calc(100vh - 160px);
  width: calc(100% - 60px);
  background: white;
`;

export const CarouselDiv = styled.div`
  height: 65%;
  background-color: black;
`;

export const InformationDiv = styled.div`
  display: flex;
  padding: 25px 20px;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  width: 25%;
`;

export const DescriptionColumns = styled.div`
  width: 40%;
  -webkit-column-count: 2; /* Chrome, Safari, Opera */
  -moz-column-count: 2; /* Firefox */
  column-count: 2;
`;

export const CommentsAndTagsDiv = styled.div`
  width: 30%;
  background-color: grey;
  padding-bottom: 30px;
`;

export const CommentsButton = styled.button`
  outline: none;
  border: none;
  background-color: yellow;
  color: black;
  padding: 10px 20px;
  height: 40px;
  border-radius: 5px;
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
