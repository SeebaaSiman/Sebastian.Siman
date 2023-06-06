import styled, { keyframes } from "styled-components";
export const MouseScrolling = () => {
  return (
    <Mouse>
      <Wheel></Wheel>
    </Mouse>
  );
};
const showIn = keyframes`
    from {
      transform: translateY(100%);

    }
    to {
      transform: translateY(0%);
      }
        `;
const Mouse = styled.div`
  position: relative;
  width: 2em;
  height: 4em;
  color: #222;
  border: 0.15em solid #222;
  border-radius: 2em;
  animation: ${showIn} 1s ease-in-out forwards;
`;
const show = keyframes`
0% {
        transform: translateY(0);
        opacity: .5;
    }
    40%, 50% {
        opacity: .8;
    }
    90%, 100% {
        transform: translateY(50%);
        opacity: .5;
    }`;
const Wheel = styled.span`
  position: absolute;
  left: 50%;
  top: 15%;
  width: 0.6em;
  height: 1.5em;
  border: 0.1em solid #000;
  transform: translate(-50%, 0);
  border-radius: 0.6em;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: -100%;
    bottom: 0;
    background-image: linear-gradient(0deg, #000 2px, transparent 1px);
    background-size: 100% 6px;
    opacity: 0.5;
    animation: ${show} 1s ease-in-out infinite;
  }
`;
