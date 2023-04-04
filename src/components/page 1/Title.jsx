import styled from "styled-components";
import { useContext } from "react";
import { CursorContext } from "../cursor/CustomManager";
export const Title = () => {
  const { handleMouseLeave, handleMouseEnter } = useContext(CursorContext);

  return (
    <>
      <HomePage>
        <Span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          S
        </Span>
        <Span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          e
        </Span>
        <Span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          b
        </Span>
        <Span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          a
        </Span>
        <Span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          s
        </Span>
        <Span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          t
        </Span>
        <Span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          i
        </Span>
        <Span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          á
        </Span>
        <Span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          n
        </Span>
        <Span
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></Span>
        <Span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          S
        </Span>
        <Span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          i
        </Span>
        <Span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          m
        </Span>
        <Span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          a
        </Span>
        <Span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          n
        </Span>
      </HomePage>
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
const HomePage = styled.h1``;
