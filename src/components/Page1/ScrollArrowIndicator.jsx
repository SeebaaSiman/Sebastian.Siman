import styled from "styled-components";
import { bounce, showInDown } from "../../style/animation";

export const ScrollArrowIndicator = () => {
  return <Arrow></Arrow>;
};
const Arrow = styled.div`
  position: relative;
  height: 3rem;
  width: 3rem;
  animation: ${showInDown} 1s ease-in-out forwards;
  &::before {
    content: "╲╱";
    animation: ${bounce} 1s ease infinite;
    color: ${(props) => props.theme.textColor};
    font-size: 1rem;
    height: 4rem;
    line-height: 4rem;
    opacity: 0.8;
    position: absolute;
    text-align: center;
    width: 4rem;
  }
`;
