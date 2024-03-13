import {
  ContainerPage4,
  ImageWrapperDesktop,
  ImageWrapperMobile,
  ContentWrapper,
} from "@/style";
import useDeviceType from "@/hook/useDeviceType";
import video1 from "/src/assets/codevideo.mp4";
import video2 from "/src/assets/contactvideo.webm";

import { HoverVideo } from "@/components/Page4/HoverVideo";
import { Contact } from "@/components/Page4/Contact";
import { OpenModal } from "@/components/Modal/OpenModal";
import { SectionsProjects } from "./Projects";
import { useModalContext, useNavBarContext, useLanguage } from "/src/hook";

export const Page4 = () => {
  const { page4Ref } = useNavBarContext();
  const { TextModal } = useModalContext();
  const deviceType = useDeviceType();
  const { texts } = useLanguage();

  const dataPage4 = [
    {
      backgroundVideo: video1,
      description: `${texts.descriptionProject}`,
      children: <SectionsProjects />,
      modalText: `${texts.modalTextProject}`,
      toggleClass: TextModal.PROJECT,
    },
    {
      backgroundVideo: video2,
      description: `${texts.descriptionContact}`,
      children: <Contact />,
      modalText: `${texts.modalTextContact}`,
      toggleClass: TextModal.CONTACT,
    },
  ];

  return (
    <ContainerPage4 ref={page4Ref}>
      {dataPage4.map((item, index) => {
        const ImageWrapperComponent =
          deviceType === "desktop" ? ImageWrapperDesktop : ImageWrapperMobile;

        return (
          <ImageWrapperComponent key={index}>
            <HoverVideo src={item?.backgroundVideo} />
            <ContentWrapper>
              <h2>{item?.description}</h2>
              <OpenModal
                children={item?.children}
                text={item?.modalText}
                toggleClass={item?.toggleClass}
              />
            </ContentWrapper>
          </ImageWrapperComponent>
        );
      })}
    </ContainerPage4>
  );
};
