import styled from "styled-components";

export const ScrollContainerStyle = styled.div`
position: relative;
  width: 100vw;
  height: 90dvh;
  overflow: hidden;
  touch-action: none;
  display: flex;
  `
export const AboutColumnsContent = styled.div`
  will-change: transform;
 width: 50vw;
  height: 300dvh; /* Tres secciones de 100vh */
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s ease-out;
`
export const AboutSections = styled.div`
  width: 100%;
  height: 100vh; /* Cada sección ocupa el 100vh */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  background: #e0e5ec;

  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
   }
  p {
    width: 98%;
    height: 100vh;
    padding: 4px;
    display: flex;
    place-items: center;
    font-size: 1.3rem;
    color: black;
    font-family: "Zodiak", sans-serif;
    &:first-letter {
      font-weight: bold;
    }
  }
`