import { createGlobalStyle } from "styled-components";
export const StyleGlobal = createGlobalStyle`
/* *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: 'Inconsolata', monospace; */
/* } */
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: none;
    user-select:none;
}
body{
    background-color: black;
}
body::-webkit-scrollbar {
    width: 0;
  }
`