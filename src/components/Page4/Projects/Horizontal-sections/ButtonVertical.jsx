import styled from "styled-components";
import useDeviceType from "/src/hook/useDeviceType.js";
import { useLanguage } from "/src/hook";

export const ButtonVertical = ({
  setVerticalShow,
  verticalShow,
  handleCursorXs,
  handleCursorSmall,
}) => {
  const { texts } = useLanguage();
  const deviceType = useDeviceType();
  const onShowVertical = () => {
    setVerticalShow(!verticalShow);
    handleCursorSmall();
  };
  return (
    <ButtonContainer
      style={{
        justifyContent: deviceType === "desktop" ? "center" : "end",
      }}
    >
      <BtnAnimatedDesktop
        onMouseEnter={deviceType === "desktop" ? handleCursorXs : null}
        onMouseLeave={deviceType === "desktop" ? handleCursorSmall : null}
        onClick={onShowVertical}
      >
        {!verticalShow ? texts.buttonVerticalMore : texts.buttonVerticalTop}
      </BtnAnimatedDesktop>
    </ButtonContainer>
  );
};
const ButtonContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 10px;
  overflow: hidden;
`;

export const BtnAnimatedDesktop = styled.button`
  color: ${(props) => props.theme.textShadow};
  text-shadow: 1px 1px 1px transparent;
  background-color: #ccd0cf;
  width: max-content;
  opacity: 1;
  align-items: center;
  padding: 6px 16px;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Oxygen", sans-serif;
  font-weight: 600;
  font-size: 18px;
  border-radius: 100px;
  z-index: 800;
  border: 0 transparent;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.textShadow};
    text-shadow: 1px 1px 1px #001524;
    color: ${(props) => props.theme.textColor};
    border: dashed 1px ${(props) => props.theme.textColor};
    outline: 0.1em solid transparent;
    outline-offset: 0.2em;
    border: 1px transparent;
    transition: 0.8s ease-in-out;
  }
`;
