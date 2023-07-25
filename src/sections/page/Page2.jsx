import { useContext, useEffect, useRef } from "react";
import useIntersectionObserver from "../../hook/useIntersectionObserver";
import {
  AboutContainer,
  NavBarContext,
  Text,
  Title,
  Row,
  VideoParallax,
  VideoParallax2,
} from "../../components";
import { useLanguage } from "../../language/LanguageContext";
export const Page2 = () => {
  //Creo referencias a los textos para usar el hook observer, al ser observados cambian su class css y hacen animación
  const refText = useRef();
  const refText2 = useRef();
  const refText3 = useRef();
  const options = {
    threshold: 0.5,
  };
  const isIntersecting = useIntersectionObserver(refText, options);
  const isIntersecting2 = useIntersectionObserver(refText2, options);

  //Hago visible la segunda porción del navbar con una fx inNavBar desde el context. Llamo a esa fx al ser visible en el viewport el refText3 (reutilizo la useRef) y uso el useEffect para llamar la fx
  //Traigo del contexto la referencia aboutRef para usarla con el navbar y navegar
  const { inNavBar, aboutRef } = useContext(NavBarContext);
  const img1Ref = useRef();
  const isIntersecting4 = useIntersectionObserver(img1Ref, options);
  useEffect(() => {
    if (isIntersecting4) {
      inNavBar();
    }
  }, [isIntersecting4]);
  const { texts } = useLanguage();
  return (
    <AboutContainer ref={aboutRef}>
      <Row ref={img1Ref}>
        <Title ref={refText} className={`${isIntersecting && "visible"}`}>
          {texts.speech1}
        </Title>
        <VideoParallax2 />
      </Row>
      <Text ref={refText2} className={`${isIntersecting2 && "visible"}`}>
        {texts.speech2}
      </Text>
      <VideoParallax />
    </AboutContainer>
  );
};
