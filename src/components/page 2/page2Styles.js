import styled from "styled-components";

export const AboutContainer = styled.section`
  padding: 0.5rem;
  height: 100vh;
  width: 100vw;
  color:black;
  background-color:white;
  display: flex;flex-wrap: wrap;
`;

export const Title = styled.h2`
  font-size:2rem;
  /* margin-bottom: 1.5rem; */
  display:flex;
  align-items: flex-start;
    justify-content: center;`;

export const Subtitle = styled.p`
 align-content: center;
 justify-content: center;
  opacity: 0;
  margin: 2rem;
  font-size: calc(1em + 1vw);
  /* &::first-letter {
    font-size: calc(2em + 1vw);
    /* margin: 0.5rem; */
    /* float: left; */
    shape-outside: circle(50%);
  } */
`;


