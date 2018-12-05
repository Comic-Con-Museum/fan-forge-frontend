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
  height: 200px;
  overflow-y: hidden;
  max-width: 450px;
  margin-top: 20px;
  align-items: flex-start;
`;

export const VerticalSection = styled.div`
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Artifact = styled.div`
  position: relative;
`;

export const ArtifactImg = styled.img`
  height: 200px;
`;

export const RemoveArtifact = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  text-shadow: 2px 2px 2px white;
`;

export const Splitter = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: horizontal;
  align-content: stretch;
  width: 100%;
  flex-direction: column;
  margin: 0;
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 5px;
  margin-top: 5px;
  resize: none;
  height: 100px;
  border-color: rgb(238, 238, 238);
`;

export const TitleInput = styled.input`
  display: block;
  padding: 5px;
  margin-top: 3px;
  width: 100%;
`;

export const Label = styled.label`
   font-weight: bold;
   text-transform: uppercase;
   margin-bottom: 12px;
`;

export const SubmitFormTitle = styled.div`
  font-size: 22px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const SubmitFormRow = styled.div`
  margin-top: 10px;
`
export const TagContainer = styled.div`
  text-transform: uppercase;
`

export const TagTitle = styled.div`
  font-weight: bold;
`

export const TagSupport = styled.div`
  margin-top: 3px;
  font-size: 14px;
  text-transform: none;
  margin-bottom: 5px;
`