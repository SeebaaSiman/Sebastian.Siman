import styled from "styled-components";
import { outlineKeys, ScaleUpLeft } from "./animations.js";
export const FreelancerStyle = styled.div`
  font-family: "Zodiak", sans-serif;
  animation: ${ScaleUpLeft} 0.6s ease-in-out;
  h1 {
    font-family: "Boska", sans-serif;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.85);

  }
  p {
    font-size: 14px;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.85);

  }
`
export const FreelancePulseContainer = styled.div`
 display: flex;
  align-items: center;
  justify-content: start;
  gap: 8px;
  p {
    color: grey;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.85);
  }
  span{
    display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 10px;
  height: 10px;
  border: solid 2px rgb(255, 207, 64);
  border-radius: 50%;
  /* margin: 0 10px; */
  background-color: rgb(255, 207, 64);
  }
  div{  position: absolute;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  animation: ${outlineKeys} 2s ease-in-out infinite;}
`