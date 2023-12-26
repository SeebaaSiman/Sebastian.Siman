import { useContext } from "react";
import styled from "styled-components";
import { device } from "@/style/StyleGlobal";
import { useLanguage } from "@/language/LanguageContext";
import { CursorContext } from "@/components/cursor/CustomManager";

export const ButtonModal = ({ onClose, modalClass }) => {
  const { handleCursorXs, handleCursorSmall } = useContext(CursorContext);
  const { texts } = useLanguage();

  const text = `${texts.buttonModal}`;
  return (
    <Back
      className={modalClass}
      variantt={modalClass}
      onClick={onClose}
      onMouseEnter={handleCursorXs}
      onMouseLeave={handleCursorSmall}
    >
      {text}
    </Back>
  );
};

const Back = styled.p`
  position: absolute;
  left: 0;
  top: 0;
  margin: 0.1rem;
  z-index: 900;
  border: none;
  background-color: transparent;
  font-family: "bebas neue", sans-serif;
  font-size: 1.1rem;
  /* font-weight: bold; */
  text-decoration: none;
  transition: 0.2s ease-in-out;
  color: ${(props) => (props.variantt === "Contact" ? "#fff" : "#000")};

  @media ${device.sm} {
    font-size: 1.3rem;
  }
  @media ${device.lg} {
    font-size: 1.5rem;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.2px;
    background-color: ${(props) =>
      props.variantt === "Contact" ? "#d1d0cf" : "#515151"};
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.2s ease-in-out;
  }
  &:hover::before {
    transform: scaleX(1);
  }
  &:hover {
    color: ${(props) => (props.variantt === "Contact" ? "#e2dfdd" : "#515151")};
  }
`;
