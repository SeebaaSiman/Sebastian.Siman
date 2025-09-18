import { keyframes } from "styled-components";

//animations entrada home

export const scaleUpBottom = keyframes`
 0% {
  transform: translateY(20px);
  transform-origin: top center;
} 100% {
  transform: translateY(0);
  transform-origin: top center;
} `
export const scaleUpCenter = keyframes`
0% {
 transform: scale(0.4);
}
100% {
 transform: scale(1);
}
 `

//switch language animations
export const languageShowIn = keyframes`from {
    scale: 0.3;
    opacity: 0;
    transform: translateX(-80px);
  }
  to {
    scale: 1;
    opacity: 1;
    transform: translateX(0px);
  }`
export const languageShowOut = keyframes`

  from {
    scale: 1;
    opacity: 1;
    transform: translateX(0px);
  }
  to {
    scale: 0.3;
    opacity: 0;
    transform: translateX(80px);
  }
`
export const ScaleUpRight = keyframes`
  0% {
    transform: scale(0.5);
    transform-origin: right center;
  }
  100% {
    transform: scale(1);
    transform-origin: right center;
  }
`
export const ScaleUpLeft = keyframes`
  0% {
    transform: scale(0.5);
    transform-origin: left center;
  }
  100% {
    transform: scale(1);
    transform-origin: left center;
  }
`
export const BlinkCarete = keyframes`
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #fff;
  }
`
export const outlineKeys = keyframes`  0% {
    transform: scale(0);
    outline: solid 5px hsl(0, 0%, 87%);
    outline-offset: 0;
    opacity: 1;
  }

  100% {
    transform: scale(1);
    outline: solid 0 rgb(255, 207, 64);
    outline-offset: 5px;
    opacity: 0;
  }`
export const showUnderlineHover = keyframes`
    0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
  `
export const pulse = keyframes`
    0% {
    box-shadow: inset 2px 2px 2px #05050525;
    border: none;
  }
  25% {
    box-shadow: inset 3px 3px 3px #05050535;
    border: none;
  }
  50% {
    box-shadow: inset -2px -2px 2px #05050535;
    border: none;
  }
  75% {
    box-shadow: inset 3px 3px 3px #05050535;
    border: none;
  }
  100% {
    box-shadow: inset 2px 2px 2px #05050525;
    border: none;
  }
  `

export const showbrightness = keyframes`
  0% {
 filter: brightness(0) drop-shadow(0 0 0px #333);

  }
  100% {
     filter: brightness(1.4)  drop-shadow(0 0 8px #333);
      }
  `