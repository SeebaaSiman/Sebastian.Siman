import styled from "styled-components";
import { showInLeft, device } from "@/style";
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
    <ButtonContainer>
      <BtnAnimatedDesktop
        onMouseEnter={deviceType === "desktop" ? handleCursorXs : null}
        onMouseLeave={deviceType === "desktop" ? handleCursorSmall : null}
        onClick={onShowVertical}
      >
        {!verticalShow ? texts.buttonVerticalTop : texts.buttonVerticalMore}
      </BtnAnimatedDesktop>
    </ButtonContainer>
  );
};
const ButtonContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  overflow: hidden;
`;

export const BtnAnimatedDesktop = styled.button`
  /* color: #4a5c6a; */
  color: ${(props) => props.theme.textShadow};
  text-shadow: 1px 1px 1px transparent;
  /* background-color: transparent; */
  background-color: #ccd0cf;
  width: max-content;
  opacity: 1;
  /* border: dashed 1px #001524; */
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
  @media ${device.md} {
    border: 0 transparent;
    display: flex;
    gap: 4px;
    margin: 0;
    span {
      display: block;
    }
  }
  &:hover,
  &:focus {
    /* color: #001524; */
    /* background-color: #ccd0cf; */
    background-color: ${(props) => props.theme.textShadow};
    text-shadow: 1px 1px 1px #001524;
    color: ${(props) => props.theme.textColor};
    border: dashed 1px ${(props) => props.theme.textColor};
    /* background-color: transparent; */
    outline: 0.1em solid transparent;
    outline-offset: 0.2em;
    border: 1px transparent;
    transition: 0.8s ease-in-out;
  }
  /* animation: ${showInLeft} 0.8s ease-in-out forwards; */
`;
