import { css } from "styled-components";
import { showInNavItem } from "./animation";
import { device } from "./StyleGlobal";

export const BoxShadow = css`
box-shadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,' +
    'rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,' +
    'rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,' +
    'rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,' +
    'rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px';
`;


export const UnderlineHover = css`
font-family: 'Bebas Neue',sans-serif;
color: ${(props) => props.theme.textColor};
filter:drop-shadow(1px 1px 1px ${(props) => props.theme.textShadow});
transition: color 0.8s;
animation: ${showInNavItem} 0.5s ease-in-out forwards;
font-size: 1.5rem;
@media ${device.lg} {
    font-size: 1.8rem;
  }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: ${(props) => props.theme.textShadow};
      border-radius: 4px;
      scale: 0;
      transform-origin: left;
      transition: scale 0.8s;
    }
    &:hover {
      color: ${(props) => props.theme.textShadow};
    }
    &:hover::before {
      scale: 1;
    }
  `