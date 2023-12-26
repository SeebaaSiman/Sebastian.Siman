import { useContext, useEffect, useRef } from "react";
import useIntersectionObserver from "@/hook/useIntersectionObserver";
import { AboutContainer, Text, ColumnRight, ColumnLeft } from "@/style";
import { useLanguage } from "@/language/LanguageContext";
import { NavBarContext } from "@/components/menu/NavBarManager";
import setup from "@/assets/setup.jpg";
import ginasia from "@/assets/ginasia.jpg";
import code from "@/assets/code.jpg";
import { useReverseScroll } from "@/hook";
export const Page2 = () => {
  //Creo referencias a los textos para usar el hook observer, al ser observados cambian su class css y hacen animación
  const refText = useRef();
  const refText2 = useRef();
  const refText3 = useRef();
  const ColumnRigthRef = useRef();

  const options = {
    threshold: 0.3,
  };
  const isIntersecting = useIntersectionObserver(refText, options);
  const isIntersecting2 = useIntersectionObserver(refText2, options);
  const isIntersecting3 = useIntersectionObserver(refText3, options);

  //Hago visible la segunda porción del navbar con una fx inNavBar desde el context. Llamo a esa fx al ser visible en el viewport el isIntersecting (reutilizo la useRef) y uso el useEffect para llamar la fx
  //Traigo del contexto la referencia aboutRef para usarla con el navbar y navegar
  const { inNavBar, aboutRef } = useContext(NavBarContext);

  // const isIntersecting4 = useIntersectionObserver(img1Ref, options);
  useEffect(() => {
    if (isIntersecting) {
      inNavBar();
    }
  }, [isIntersecting]);

  const { texts } = useLanguage();
  useReverseScroll(aboutRef, ColumnRigthRef);

  return (
    <AboutContainer ref={aboutRef}>
      <ColumnLeft>
        <Text ref={refText} className={`${isIntersecting && "visible"}`}>
          {texts.speech1}
        </Text>
        <img src={code} alt="" />
        <Text ref={refText2} className={`${isIntersecting2 && "visible"}`}>
          {texts.speech2}
        </Text>
      </ColumnLeft>
      <ColumnRight ref={ColumnRigthRef}>
        <img src={ginasia} alt="" />
        <Text ref={refText3} className={`${isIntersecting3 && "visible"}`}>
          {texts.speech3}
        </Text>
        <img src={setup} alt="" />
      </ColumnRight>
    </AboutContainer>
  );
};
