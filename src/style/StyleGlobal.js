import { createGlobalStyle } from "styled-components";
import { Poppins } from "google-fonts";

export const device = {
  sm: `(min-width: 480px)`,
  md: `(min-width: 768px)`,
  lg: `(min-width: 1024px)`,
  xl: `(min-width: 1200px)`,
};
//! Aplicación de device
/* h1 {
    font-size: 2rem;
    ${device.md} {
      font-size: 3rem;
    }
  } */
export const StyleGlobal = createGlobalStyle`
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* cursor: none; */
    user-select:none;
    overflow-x: hidden;
    scroll-behavior: smooth;

}
html{
    background-color: #e2dfdd;
    color: #000;
    font-family: "Oxygen" ,'Bebas Neue',sans-serif;
}

::-webkit-scrollbar {
    width: 0;
    display: none;
  }


  ${props => props.deviceType === "desktop" && `
    * {
      cursor: none;
    }
    `}
`