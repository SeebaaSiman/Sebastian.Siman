import styled from "styled-components";
import { device } from "./StyleGlobal";
import { scaleUpTopLeft } from "./animation";

export const AboutContainer = styled.section`
  position: relative;
  height: 300vh;
  width: 100%;
  overflow: hidden;
  display: flex;
`;
const ColumnDefault = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 10px;
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
`;
export const ColumnRight = styled(ColumnDefault)`
  top: -200vh;
  right: 0;
  width: 50%;

`;
export const ColumnLeft = styled(ColumnDefault)`
  top: 0;
  left: 0;
`;

export const Text = styled.p`
opacity: 0;
width: 98%;
height: 100vh;
padding: 4px;
display: flex;
place-items: center;
font-size: 1.3rem;
color:${(props) => props.theme.textColor};
  font-family: "Oxygen",sans-serif;
&:first-letter {
  font-weight:bold;
}
@media ${device.sm} {
  padding: 1rem;
  font-size: 1.5rem;
}
@media ${device.md} {
  font-size: 2rem;
}
@media ${device.lg} {
font-size: 2.2rem;
}
&.visible {
  animation: ${scaleUpTopLeft} .9s linear forwards;
}
`;
