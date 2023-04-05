import styled, { keyframes } from "styled-components";
export const Container = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  /* position: relative; // (?) */
  overflow: hidden;
  /* width: 100%; */
  height: 100vh;
  &:first-child {
    margin-left: -70px;
  }
  &:last-child {
    margin-right: -70px;
  }
`;
const bounceIn = keyframes`
0% {
  transform: scale(0.8);
 opacity: 0;
}
60% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
  `;
export const ImagenWrapper = styled.div`
  overflow: hidden;
  flex-grow: 1;
  position: relative;
  /* width: 100%; */
  height: 100vh;
  opacity: 0.5;
  transition: transform 0.2s ease-out;
  transform: skew(-8deg);
  img {
    object-fit: cover;
    position: absolute;
    height: 100%;
    width: 100%;
  }
  &:hover {
    width: 40%;
    opacity: 1;
    filter: contrast(120%);
  }
  &:hover h2 {
    animation: ${bounceIn} 1200ms;
    color: white;
    transform: scale(1.1);
    opacity: 1;
  }
  &:hover button {
    opacity: 0.8;
    background: #fff;
    color: #000;
  }
`;

export const ObliqueCaption = styled.div`
  position: absolute;
  /* bottom: 50%; */
  color: #fff;
  z-index: 1;
  width: 100%;
  bottom: auto;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;

  h2 {
    font-family: "poppins", sans-serif;
    font-size: 4rem;
    color: #fff;
    /* margin: 0;
    padding: 0; */
    text-transform: uppercase;
    transform: scale(0.5);
    opacity: 0.5;
    color: black;
  }
  button {
    font-family: "poppins", sans-serif;
    font-size: 1.1rem;
    text-transform: uppercase;
    background: transparent;
    color: #fff;
    border: 2px solid #fff;
    padding: 0.8rem 4rem;
    margin-top: 1rem;
    opacity: 0.5;
    cursor: none;
    -webkit-transition: all 800ms;
    -moz-transition: all 800ms;
    -ms-transition: all 800ms;
    -o-transition: all 800ms;
    transition: all 800ms;
  }
`;
