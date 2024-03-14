import { Fragment } from "react";
import useDeviceType from "/src/hook/useDeviceType";
import {
  IconCss,
  IconHtml,
  IconReact,
  InfoContainer,
  ButtonBackProject,
  TextInfo,
} from "@/style";
import { BtnAnimatedDesktop } from "../Horizontal-sections/ButtonVertical";
import { IconTech } from "/src/data/iconTech";
import { useCustomCursorContext, useLanguage } from "/src/hook";
import { Carousel } from "./Carousel";

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
      <TextInfo header>
        <img src={infoActive?.icon} />
        <p style={{ fontSize: "1.8rem", fontWeight: "bold" }} header>
          {infoActive?.title}
        </p>
      </TextInfo>
      <Carousel array={infoActive?.img} />
      <TextInfo>
        <p>Tech:</p>
        {infoActive?.tech?.icon?.map((techName, index) => (
          <Fragment key={index}>{iconMapping[techName]}</Fragment>
        ))}
      </TextInfo>
      <TextInfo>{infoActive?.tech?.text}</TextInfo>
      <a href={infoActive?.url} target="_blank">
        <BtnAnimatedDesktop
          onMouseEnter={deviceType === "desktop" ? handleCursorXs : null}
          onMouseLeave={deviceType === "desktop" ? handleCursorSmall : null}
        >
          {texts.go}
        </BtnAnimatedDesktop>
      </a>
    </InfoContainer>
  );
};
