import styled from "styled-components";

export const About = styled.div`
  color: white;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;
export const Subtitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  &::first-letter {
    font-size: calc(3em + 1vw);
    margin: 0.5rem;
    float: left;
    /* shape-outside: circle(50%); */
  }
`;


