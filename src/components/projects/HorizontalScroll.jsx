import { Content, HorizontalScrollContainer } from "../../styles/horizontal-scroll-style";
import { useHorizontalSectionProvider } from "../../hook/useContextProvider";

export const HorizontalScroll = ({ children }) => {
  const { scrollPosition } = useHorizontalSectionProvider();
  return (
    <HorizontalScrollContainer
      style={{
        transform: `translateX(-${scrollPosition}%)`,
      }}
    >
      <Content>{children[0]}</Content>
      <Content>{children[1]}</Content>
    </HorizontalScrollContainer>
  );
};
