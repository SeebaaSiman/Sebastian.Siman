import styled, { keyframes } from "styled-components";

export const AboutContainer = styled.section`
  height: 120vh;
  width: 100%;
  background-color:black;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  align-content: center;
justify-content: center;
`;
const scaleUpTopLeft = keyframes`
0% { transform: translateX(-48px); animation-timing-function: ease-in; opacity: 1; }
24% { opacity: 1; }
40% { transform: translateX(-26px); animation-timing-function: ease-in; }
65% { transform: translateX(-13px); animation-timing-function: ease-in; }
82% { transform: translateX(-6.5px); animation-timing-function: ease-in; }
93% { transform: translateX(-4px); animation-timing-function: ease-in; } 25%, 55%, 75%, 87%, 98% { transform: translateX(0); animation-timing-function: ease-out; }
100% { transform: translateX(0); animation-timing-function: ease-out; opacity: 1; }`;
export const Text = styled.p`
color: #444444;
/* background: #FFFFFF; */
text-shadow: 1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC;
  margin: 0.3rem 4rem;
  font-size: calc(1em + 1vw);
  opacity: 0;
  /* transform: translateY(-50%) scale(0);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out,
  scale 0.5s ease-in-out; */

  &.visible {
    /* opacity: 1;
    transform: translateY(0%) scale(1); */
    animation: ${scaleUpTopLeft} .9s linear forwards;
  }
`;

export const Title = styled(Text)`
&:first-letter {
  font-size: calc(2em + 1vw);
  margin: 0.2rem;
  /* float: left; */
  /* shape-outside: circle(50%); */
}
 `;