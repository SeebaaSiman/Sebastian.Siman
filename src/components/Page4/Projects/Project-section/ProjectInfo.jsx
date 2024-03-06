import { Fragment } from "react";
import styled from "styled-components";
import useDeviceType from "/src/hook/useDeviceType";
import {
  IconCss,
  IconHtml,
  IconJavaScript,
  IconReact,
  iconSize,
  UnderlineHover,
} from "@/style";
import { BtnAnimatedDesktop } from "../Horizontal-sections/ButtonVertical";
import { IconTech } from "/src/data/iconTech";
import { useCustomCursorContext, useLanguage } from "/src/hook";

export const ProjectInfo = ({
  toggleSectionsHorizontal,
  setInfoActive,
  infoActive,
}) => {
  const { handleCursorXs, handleCursorSmall } = useCustomCursorContext();
  const { texts } = useLanguage();
  const deviceType = useDeviceType();
  const onProjects = () => {
    setInfoActive(null);
    toggleSectionsHorizontal();
    handleCursorSmall();
  };

  const iconMapping = {
    [IconTech.HTML]: <IconHtml />,
    [IconTech.CSS]: <IconCss />,
    [IconTech.REACT]: <IconReact />,
  };
  return (
    <InfoContainer>
      <ButtonBackProject
        onMouseEnter={deviceType === "desktop" ? handleCursorXs : null}
        onMouseLeave={deviceType === "desktop" ? handleCursorSmall : null}
        onClick={onProjects}
      >
        {texts.buttonProjectInfo}
      </ButtonBackProject>
      <p style={{ fontSize: "1.5rem" }}>{infoActive?.title}</p>
      <p>{infoActive?.description}</p>
      <div>
        <img src={infoActive?.img} alt="" />
      </div>
      <span>
        <p>Tech:</p>
        {infoActive?.tech?.icon?.map((techName, index) => (
          <Fragment key={index}>{iconMapping[techName]}</Fragment>
        ))}
      </span>
      <span>{infoActive?.tech?.text}</span>
      <a href={infoActive?.url} target="_blank">
        <BtnAnimatedDesktop
          onMouseEnter={deviceType === "desktop" ? handleCursorXs : null}
          onMouseLeave={deviceType === "desktop" ? handleCursorSmall : null}
        >
          IR
        </BtnAnimatedDesktop>
      </a>
    </InfoContainer>
  );
};
const ButtonBackProject = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  margin: 6px;
  z-index: 900;
  ${UnderlineHover}
`;
const InfoContainer = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.bgProjectInfo};
  color: ${(props) => props.theme.textColor};
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2.2rem;
  padding-bottom: 1rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 1rem;
  }
  img {
    border-radius: 22px;
    filter: drop-shadow(2px 2px 3px black);
    /* width: 80%; */
    height: 250px;
  }
  span {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-self: start;
    align-self: start;
    gap: 6px;
  }
`;
//! pequeño slider en donde están todas las imágenes rotadas y al hacer click adelante se escalan y al hacer click atras escala inverso
// https://www.hover.dev/components/carousels
