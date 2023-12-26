import styled from "styled-components";
import { showInDown, showMouse } from "../../style/animation";
export const MouseScrolling = () => {
  return (
    <Mouse>
      <Wheel></Wheel>
    </Mouse>
  );
};

const Mouse = styled.div`
  position: relative;
  width: 2em;
  height: 4em;
  color: #222;
  border: 0.15em solid ${(props) => props.theme.textColor};
  border-radius: 2em;
  animation: ${showInDown} 1s ease-in-out forwards;
`;

const Wheel = styled.span`
  position: absolute;
  left: 50%;
  top: 15%;
  width: 0.6em;
  height: 1.5em;
  border: 0.1em solid ${(props) => props.theme.textColor};
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
    background-image: linear-gradient(
      0deg,
      ${(props) => props.theme.mouse} 2px,
      transparent 1px
    );
    background-size: 100% 6px;
    opacity: 0.5;
    animation: ${showMouse} 1s ease-in-out infinite;
  }
`;
