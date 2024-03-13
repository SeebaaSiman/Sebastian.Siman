import { createGlobalStyle } from "styled-components";
import BebasNeue from "/src/font/BebasNeue-Regular.ttf";
import Oxygen from "/src/font/Oxygen-Light.ttf";
import Roboto from "/src/font/RobotoSerif.ttf";
export const device = {
  sm: `(min-width: 480px)`,
  md: `(min-width: 768px)`,
  lg: `(min-width: 1024px)`,
  xl: `(min-width: 1200px)`,
};
export const Style = {
  boxShadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,' +
    'rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,' +
    'rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,' +
    'rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,' +
    'rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
};
export const StyleGlobal = createGlobalStyle`
 @font-face {
    font-family: "Bebas Neue";
    src: url(${BebasNeue}) format("woff");
    font-weight: normal;
    font-style: normal;
  }
 @font-face {
    font-family: "Oxygen";
    src: url(${Oxygen}) format("woff");
    font-weight: normal;
    font-style: normal;
  }
 @font-face {
    font-family: "Roboto";
    src: url(${Roboto}) format("woff");
    font-weight: normal;
    font-style: normal;
  }

*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select:none;
    overflow-x: hidden;
}
html{
  background-color: ${(props) => props.theme.bgApp};
    color: ${(props) => props.theme.textColor};
    font-family: "Oxygen" ,'Bebas Neue',"Roboto",sans-serif;
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