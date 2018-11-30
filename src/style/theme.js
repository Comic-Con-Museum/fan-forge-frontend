import { css } from 'styled-components';

export const colors = {
 yellow_1: 'yellow',
 yellow_2: 'orange',
 black: 'black',
 gray_1: 'gray'
}

export const deviceSizes = {
   mobile: "37.5em",
   tablet: "768px"
}

export const media = Object.keys(deviceSizes).reduce((accumulator, label) => {
   const emSize = deviceSizes[label]
   accumulator[label] = (...args) => css`
     @media (max-width: ${emSize}) {
       ${css(...args)};
     }
   `
   return accumulator
 }, {})