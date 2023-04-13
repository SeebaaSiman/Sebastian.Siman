import styled, { keyframes } from "styled-components";
export const MouseScrolling = () => {
  return (
    <Mouse className="scroll-icon ex-2">
      <Wheel className="wheel"></Wheel>
    </Mouse>
  );
};
const Mouse = styled.div`
  position: relative;
  /* margin: 2em; */
  width: 2em;
  height: 4em;
  border: 0.3em solid #fff;
  border-radius: 2em;
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
  border: 0.1em solid #fff;
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
    background-image: linear-gradient(0deg, #fff 2px, transparent 1px);
    background-size: 100% 6px;
    opacity: 0.5;
    animation: ${show} 1s ease-in-out infinite;
  }
`;
