import code from "../../assets/code.jpg"
import setup from "../../assets/setup.jpg"
import styled, { keyframes } from "styled-components";
import { device } from "../../style/StyleGlobal";

export const AboutContainer = styled.section`
  width: 100%;
  height: 100%;
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
opacity: 0;
width: 100%;
margin-top:1rem;
margin-left:0.5rem;
font-size: 1.3rem;
  font-family: "Oxygen",sans-serif;
&:first-letter {
  font-weight:bold;
}
@media ${device.sm} {
  font-size: 1.5rem;
}
@media ${device.md} {
  font-size: 2rem;
}
@media ${device.lg} {
font-size: 2.3rem;
}
&.visible {
  animation: ${scaleUpTopLeft} .9s linear forwards;
}
`;
export const Title = styled(Text)`
margin-top:0;
  width:65%;
   `
export const VideoParallax = styled.div`
margin-top: 2rem;
  width: 100%;
  height: 15rem;
  background-image: url(${code});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  `
export const Row = styled.div`
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  `
export const VideoParallax2 = styled.div`
width: 33%;
height: 22rem;
/* height: 50vh; */
border-radius: 5%;
background-image: url(${setup});
background-position: left;
background-attachment: fixed;
background-repeat: no-repeat;
background-size: cover;
`
