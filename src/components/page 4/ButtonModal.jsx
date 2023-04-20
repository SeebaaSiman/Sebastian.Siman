import { useContext } from "react";
import styled from "styled-components";
import { CursorContext } from "../cursor/CustomManager";

export const ButtonModal = ({ onClose }) => {
  const { handleCursorXs, handleCursorSmall } = useContext(CursorContext);

  const text = "-Volver";
  return (
    <Back
      className="btn"
      onClick={onClose}
      onMouseEnter={handleCursorXs}
      onMouseLeave={handleCursorSmall}
    >
      {text}
    </Back>
  );
};

const Back = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  margin: 0.1rem;
  z-index: 900;
  border: none;
  background-color: transparent;
  font-size: calc(1rem + 1vw);
  font-weight: bold;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.2px;
    background-color: #000;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.2s ease-in-out;
  }
  &:hover::before {
    transform: scaleX(1);
  }
  &:hover {
    color: black;
  }
`;
