import {
  Container,
  ImageWrapper,
  ContentWrapper,
  HoverVideo,
  ModalProjectItems,
  ModalContactItems,
} from "../components/page 4/";
import video1 from "../assets/code.mp4";
import video2 from "../assets/social-media.mp4";
export const Page4 = () => {
  const dataPage4 = [
    {
      backgroundVideo: video1,
      description: "Projects",
      modal: <ModalProjectItems />,
    },
    {
      backgroundVideo: video2,
      description: "Contact",
      modal: <ModalContactItems />,
    },
  ];

  return (
    <Container>
      {dataPage4.map((item, index) => (
        <ImageWrapper key={index}>
          <HoverVideo src={item.backgroundVideo} />
          <ContentWrapper>
            <h2>{item.description}</h2>
            {item.modal}
          </ContentWrapper>
        </ImageWrapper>
      ))}
    </Container>
  );
};
