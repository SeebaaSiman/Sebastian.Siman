import styled from "styled-components";
import { UnderlineHover } from "../../style/effect";
import { useLanguage, useCustomCursorContext } from "/src/hook";

export const ButtonModal = ({ onClose, modalClass }) => {
  const { handleCursorXs, handleCursorSmall } = useCustomCursorContext();
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
  margin: 6px;
  z-index: 900;

  /* border: none;
  text-decoration: none;
  background-color: transparent; */

  ${UnderlineHover}
`;
