import code from "../../assets/code.jpg"
import setup from "../../assets/setup.jpg"
import styled, { keyframes } from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
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
  font-size: calc(1em + 1vw);
  opacity: 0;
  width: 65%;
  /* text-shadow: 1px 1px 1px #474747; */
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
margin-bottom:2rem;
width:90%;
&:first-letter {
  font-size: calc(2em + 1vw);
}
 `;
export const VideoParallax = styled.div`
width: 100%;
height: 300px;
background-image: url(${code});
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`

export const Row = styled.div`
margin-top:1rem;
width:100%;
height: 480px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`
export const VideoParallax2 = styled.div`
width: 35%;
height: 100%;
/* border-radius: 5%; */
background-image: url(${setup});
background-position: left;
background-attachment: fixed;
background-repeat: no-repeat;
background-size: cover;
`