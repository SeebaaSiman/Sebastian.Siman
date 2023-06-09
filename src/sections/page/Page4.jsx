import { useContext } from "react";
import {
  ContainerPage4,
  ImageWrapper,
  ContentWrapper,
  HoverVideo,
  ListProjectsEffect,
  IconsEffect,
  OpenModal,
  NavBarContext,
} from "../../components";
import useDeviceType from "../../hook/useDeviceType";
import video1 from "../../assets/code.mp4";
import video2 from "../../assets/contact2.mp4";

export const Page4 = () => {
  const { page4Ref } = useContext(NavBarContext);
  const deviceType = useDeviceType();
  const dataPage4 = [
    {
      backgroundVideo: video1,
      description: "Projects",
      children: <ListProjectsEffect />,
      modalText: "ir a proyectos",
    },
    {
      backgroundVideo: video2,
      description: "Contact",
      children: <IconsEffect />,
      modalText: "Contáctame",
    },
  ];

  return (
    <ContainerPage4 ref={page4Ref} deviceType={deviceType}>
      {dataPage4.map((item, index) => (
        <ImageWrapper key={index} >
          <HoverVideo src={item.backgroundVideo} />
          <ContentWrapper>
            <h2>{item.description}</h2>
            <OpenModal
              children={item.children}
              text={item.modalText}
              toggleClass={item.description}
            />
          </ContentWrapper>
        </ImageWrapper>
      ))}
    </ContainerPage4>
  );
};
