import {
  Container,
  ImageWrapper,
  ContentWrapper,
  HoverVideo,
  ListProjectsEffect,
} from "../components/page 4/";
import video1 from "../assets/code.mp4";
import video2 from "../assets/social-media.mp4";
import { OpenModal } from "../components/page 4/modal/OpenModal";
import { TextChange } from "../components/page 1/TextChange";
export const Page4 = () => {
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
      children: <TextChange />,
      modalText: "Contactame",
    },
  ];

  return (
    <Container>
      {dataPage4.map((item, index) => (
        <ImageWrapper key={index}>
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
    </Container>
  );
};
