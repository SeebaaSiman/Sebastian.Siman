import { createGlobalStyle } from "styled-components";
import { Poppins } from "google-fonts";

export const StyleGlobal = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oxygen&display=swap');
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
    overflow-x: hidden;
    scroll-behavior: smooth;
}
html{
    background-color: #e2dfdd;
    color: #000;
    font-family: 'Bebas Neue',"Oxygen" ,sans-serif;
}
::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`
//  #b3ff00