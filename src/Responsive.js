import { css } from "styled-components";

export const mobile = (props) => {
    return css` 
    @media only screen and (max-width: 380px) {
        ${props}
    }
    `
}
// when using we write this mobile function and as arguments we 
//write the css

// export const tablet = (props) => {
//     return css`
//       @media only screen and (max-width: 380px) {
//         ${props}
//       }
//     `;
//   };