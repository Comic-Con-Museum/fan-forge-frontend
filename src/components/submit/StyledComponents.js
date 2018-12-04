import styled from 'styled-components';

export const SubmitForm = styled.div`
  background-color: #f7f7f7;
  padding: 50px;
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  justify-content: center;
  width: calc(100% - 200px);
  position: relative;
  left: 50px;
`;

export const SubmitButton = styled.button`
  margin: 35px 0 0;
  width: 100%;
  background-color: yellow;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
  border: 0;
  padding: 5px;
  box-shadow: 0 2px 13px rgba(0,0,0,0.15);
  cursor: pointer;
`;

export const ImageSection = styled.div`
  display: flex;
  flex-direction: horizontal;
  width: calc(100% - 260px);
  height: 200px;
  overflow-x: scroll;
`;

export const HorizontalSection = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: horizontal;
  justify-content: space-between;
  width: 100%;
`;

export const Artifact = styled.div`
  position: relative;
`;

export const ArtifactImg = styled.img`
  height: 100%;
`;

export const RemoveArtifact = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  text-shadow: 2px 2px 2px white;
`;
