import { useContext } from "react";
import {
  ContainerPage4,
  ImageWrapperDesktop,
  ImageWrapperMobile,
  ContentWrapper,
  HoverVideo,
  ListProjectsEffect,
  IconsEffect,
  OpenModal,
  NavBarContext,
} from "../../components";
import useDeviceType from "../../hook/useDeviceType";
import { useLanguage } from "../../language/LanguageContext";
import video1 from "../../assets/code.mp4";
import video2 from "../../assets/contact2.mp4";

export const Page4 = () => {
  const { page4Ref } = useContext(NavBarContext);
  const deviceType = useDeviceType();
  const { texts } = useLanguage();
  const dataPage4 = [
    {
      backgroundVideo: video1,
      description: `${texts.descriptionProject}`,
      children: <ListProjectsEffect />,
      modalText: `${texts.modalTextProject}`,
      toggleClass: "Project",
    },
    {
      backgroundVideo: video2,
      description: `${texts.descriptionContact}`,
      children: <IconsEffect />,
      modalText: `${texts.modalTextContact}`,
      toggleClass: "Contact",
    },
  ];

  return (
    <ContainerPage4 ref={page4Ref}>
      {dataPage4.map((item, index) => {
        const ImageWrapperComponent =
          deviceType === "desktop" ? ImageWrapperDesktop : ImageWrapperMobile;

        return (
          <ImageWrapperComponent key={index}>
            <HoverVideo src={item.backgroundVideo} />
            <ContentWrapper>
              <h2>{item.description}</h2>
              <OpenModal
                children={item.children}
                text={item.modalText}
                toggleClass={item.toggleClass}
              />
            </ContentWrapper>
          </ImageWrapperComponent>
        );
      })}
    </ContainerPage4>
  );
};
