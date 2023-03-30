import { useContext } from "react";
import styled from "styled-components";
import { CursorContext } from "../../style/cursor/CustomManager";
export const Title = () => {
  const { setSize } = useContext(CursorContext);

  const handleMouseEnter = () => {
    setSize("regular");
  };
  const handleMouseLeave = () => {
    setSize("small");
  };
  return (
    <>
      <HOne onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Span>S</Span>
        <Span>e</Span>
        <Span>b</Span>
        <Span>a</Span>
        <Span>s</Span>
        <Span>t</Span>
        <Span>i</Span>
        <Span>á</Span>
        <Span>n</Span>
        <Span> </Span>
        <Span>S</Span>
        <Span>i</Span>
        <Span>m</Span>
        <Span>a</Span>
        <Span>n</Span>
      </HOne>
    </>
  );
};

const Span = styled.span`
  color: white;
  font-size: calc(2em + 1.5vw);
  font-family: "Work Sans", sans-serif;
  display: inline-block;
  transition: transform 0.3s ease;
  &:hover {
    transform: rotate(20deg);
  }
  &:nth-child(odd):hover {
    transform: rotate(-20deg);
  }
  &:nth-child(11) {
    margin-left: 0.3em;
  }
`;
const HOne = styled.h1``;
