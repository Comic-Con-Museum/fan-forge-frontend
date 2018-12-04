import styled, { keyframes } from 'styled-components';
import { randomInt } from '../../utils/helpers';

export const ComponentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const shrink = keyframes`
  0% {
    transform-origin: bottom;
    transform: scaleY(1);
    max-height: 800px;
  }

  100% {
    max-height: 0px;
    transform: scaleY(0);
  }
`

export const expand = keyframes`
  0% {
    transform-origin: top;
    transform: scaleY(0);
    max-height: 0;
  }

  100% {
    max-height: 800px;
    transform: scaleY(1);
  }
`

export const ArtifactPlaceholder = styled.div`
  height: 100%;
  background-color: #f0f0f0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' viewBox='0 0 192 192'%3E%3Cpath fill='%230857d8' fill-opacity='0.43' d='M192 15v2a11 11 0 0 0-11 11c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H145v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11 13 13 0 1 1 .02 26 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43a6.1 6.1 0 0 0-3.03 4.87V143h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 181 164a11 11 0 0 0 11 11v2a13 13 0 0 1-13-13 12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84a6.1 6.1 0 0 0-4.87-3.03H145v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 124 181a11 11 0 0 0-11 11h-2a13 13 0 0 1 13-13c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43a6.1 6.1 0 0 0 3.03-4.87V145h-35.02a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 107 124a11 11 0 0 0-22 0c0 1.94 1.16 4.75 2.53 6.11l2.36 2.36a6.93 6.93 0 0 1 1.22 7.56l-.43.84a8.08 8.08 0 0 1-6.66 4.13H49v35.02a6.1 6.1 0 0 0 3.03 4.87l.84.43c1.58.79 4 .4 5.24-.85l2.36-2.36a12.04 12.04 0 0 1 7.51-3.11A13 13 0 0 1 81 192h-2a11 11 0 0 0-11-11c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V145H11.98a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 0 1 0 177v-2a11 11 0 0 0 11-11c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H47v-35.02a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 28 109a13 13 0 1 1 0-26c2.47 0 5.79 1.37 7.53 3.11l2.36 2.36a4.94 4.94 0 0 0 5.24.85l.84-.43A6.1 6.1 0 0 0 47 84.02V49H11.98a8.08 8.08 0 0 1-6.66-4.13l-.43-.84a6.91 6.91 0 0 1 1.22-7.56l2.36-2.36A10.06 10.06 0 0 0 11 28 11 11 0 0 0 0 17v-2a13 13 0 0 1 13 13c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84A6.1 6.1 0 0 0 11.98 47H47V11.98a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 68 11 11 11 0 0 0 79 0h2a13 13 0 0 1-13 13 12 12 0 0 1-7.53-3.11l-2.36-2.36a4.93 4.93 0 0 0-5.24-.85l-.84.43A6.1 6.1 0 0 0 49 11.98V47h35.02a8.08 8.08 0 0 1 6.66 4.13l.43.84a6.91 6.91 0 0 1-1.22 7.56l-2.36 2.36A10.06 10.06 0 0 0 85 68a11 11 0 0 0 22 0c0-1.94-1.16-4.75-2.53-6.11l-2.36-2.36a6.93 6.93 0 0 1-1.22-7.56l.43-.84a8.08 8.08 0 0 1 6.66-4.13H143V11.98a6.1 6.1 0 0 0-3.03-4.87l-.84-.43c-1.59-.8-4-.4-5.24.85l-2.36 2.36A12 12 0 0 1 124 13a13 13 0 0 1-13-13h2a11 11 0 0 0 11 11c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V47h35.02a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 179 28a13 13 0 0 1 13-13zM84.02 143a6.1 6.1 0 0 0 4.87-3.03l.43-.84c.8-1.59.4-4-.85-5.24l-2.36-2.36A12 12 0 0 1 83 124a13 13 0 1 1 26 0c0 2.47-1.37 5.79-3.11 7.53l-2.36 2.36a4.94 4.94 0 0 0-.85 5.24l.43.84a6.1 6.1 0 0 0 4.87 3.03H143v-35.02a8.08 8.08 0 0 1 4.13-6.66l.84-.43a6.91 6.91 0 0 1 7.56 1.22l2.36 2.36A10.06 10.06 0 0 0 164 107a11 11 0 0 0 0-22c-1.94 0-4.75 1.16-6.11 2.53l-2.36 2.36a6.93 6.93 0 0 1-7.56 1.22l-.84-.43a8.08 8.08 0 0 1-4.13-6.66V49h-35.02a6.1 6.1 0 0 0-4.87 3.03l-.43.84c-.79 1.58-.4 4 .85 5.24l2.36 2.36a12.04 12.04 0 0 1 3.11 7.51A13 13 0 1 1 83 68a12 12 0 0 1 3.11-7.53l2.36-2.36a4.93 4.93 0 0 0 .85-5.24l-.43-.84A6.1 6.1 0 0 0 84.02 49H49v35.02a8.08 8.08 0 0 1-4.13 6.66l-.84.43a6.91 6.91 0 0 1-7.56-1.22l-2.36-2.36A10.06 10.06 0 0 0 28 85a11 11 0 0 0 0 22c1.94 0 4.75-1.16 6.11-2.53l2.36-2.36a6.93 6.93 0 0 1 7.56-1.22l.84.43a8.08 8.08 0 0 1 4.13 6.66V143h35.02z'%3E%3C/path%3E%3C/svg%3E");
`

export const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
  text-shadow: 0px 0px 3px rgba(${props => props.blackTheme ? '255,255,255' : '0,0,0'}, 0.9);
  display: inline;
  z-index: 100;
  color: ${props => props.blackTheme ? 'black' : 'white'}; 
  font-size: 40px;
  box-shadow: 5px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.blackTheme ? 'white' : 'black'};
    text-shadow: 0px 0px 3px rgba(${props => props.blackTheme ? '0,0,0' : '255,255,255'}, 0.9);
  }
`

export const Card = styled.div`
  border-radius: 5px;
  box-shadow: 5px 8px 6px rgba(0, 0, 0, 0.16);
  background: white;
  position: relative;
  margin-bottom: 15px;
  transition: all 0.40s;
  animation: ${props => props.close ? shrink : expand} 0.40s ease forwards;
`

export const TitlePlaceholder = styled.div`
  width: 80%;
  height: 25px;
  border-radius: 20px;
  background-color: #e6e6e6;
`

export const SentencePlaceholder = styled.div`
  height: 16px;
  border-radius: 10px;
  width: ${() => randomInt(40, 100)}%;
  background-color: #e6e6e6;
  display: inline-block;
  margin-bottom: 5px;
`

export const ArtifactImg = styled.div`
  height: 100%;
  background: url(${props => props.src});
  background-size: cover;
`

export const ArtifactDiv = styled.div`
  height: 100px;
  width: 100%;
  overflow: hidden;
`;

export const InformationDiv = styled.div`
  display: flex;
`;

export const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  width: 20%;
  padding: 20px 0 20px 20px;
  text-transform: uppercase;
  line-height: 1.2em;
`;

export const DescriptionAndExtrasDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 500px;
  padding: 25px 25px 15px 5px;
`;

export const DescriptionColumns = styled.div`
  min-height: 100px;
  line-height: 1.2em;
`;

export const CommentsButton = styled.button`
  outline: none;
  border: none;
  background-color: yellow;
  color: black;
  padding: 10px 20px;
  font-weight: 700;
  border-top-left-radius: 5px;
  font-size: 14px;
  box-shadow: 0 2px 13px rgba(0,0,0,0.15);
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  
  &:hover {
    color: #3e3e3e;
  }

  &:active {
    color: #3e3e3e;
    box-shadow: 0 2px 13px rgba(0,0,0,0.05);
  }
`;

export const ExtrasDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  position: relative;
`;

export const TagsDiv = styled.div`
  margin-right: 50px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
`;

export const Tag = styled.button`
  background-color: yellow;
  margin-left: 10px;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  padding: 10px 10px;
  font-weight: 700;
  border-top-left-radius: 5px;
  box-shadow: 0 2px 13px rgba(0,0,0,0.15);
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
`;

export const LikesDiv = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  position: absolute;
  left: 0;
`;

export const LikesImg = styled.img`
  height: 30px;
  width: auto;
  cursor: pointer;
`;
