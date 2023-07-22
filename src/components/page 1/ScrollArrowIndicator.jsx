import styled, { keyframes } from "styled-components";

export const ScrollArrowIndicator = () => {
  return <Arrow></Arrow>;
};
const bounce = keyframes`
 50% {
    transform: translateY(-50%);
  }
`;
const showIn = keyframes`
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
      }
        `;
const Arrow = styled.div`
  position: relative;
  height: 3rem;
  width: 3rem;
  animation: ${showIn} 1s ease-in-out forwards;
  &::before {
    content: "╲╱";
    animation: ${bounce} 1s ease infinite;
    color: #000;
    font-size: 1rem;
    height: 4rem;
    line-height: 4rem;
    opacity: 0.8;
    position: absolute;
    text-align: center;
    width: 4rem;
  }
`;
