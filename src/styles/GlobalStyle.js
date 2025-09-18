import { createGlobalStyle } from 'styled-components';
import BebasNeue from "/src/styles/font/BebasNeue-Regular.woff2";
import Boska from "/src/styles/font/Boska-Medium.woff2"
import Zodiak from "/src/styles/font/Zodiak-Regular.woff2"

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Bebas Neue";
 src: url(${BebasNeue}) format("woff2");

  font-weight: 400;
  font-style: normal;
      font-display: swap;
}
@font-face {
  font-family: "Boska";
   src: url(${Boska}) format("woff2");
  font-weight: 400;
  font-style: normal;
      font-display: swap;
}
@font-face {
  font-family: "Zodiak";
 src: url(${Zodiak}) format("woff2");
  font-weight: 400;
  font-style: normal;
      font-display: swap;
}

  *, *::before, *::after {
     margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    user-select: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
 position: relative;
   }
   ::-webkit-scrollbar {
  width: 0;
  display: none;
}
button, a, li{
  font-family: "Bebas Neue", sans-serif;
}
`;

export default GlobalStyle;
// Bebas neu botónes e hipervínculos
// Zodiak descripciones y textos
// Boska títulos y subtítulos
