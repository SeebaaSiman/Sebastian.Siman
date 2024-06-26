import { useRef } from "react";
import useIntersectionObserver from "@/hook/useIntersectionObserver";
import { AboutContainer, Text, ColumnRight, ColumnLeft } from "@/style";
import setup from "@/assets/setup.jpg";
import ginasia from "@/assets/ginasia.jpg";
import code from "@/assets/code.jpg";
import { useReverseScroll, useLanguage, useNavBarContext } from "@/hook";

const Page2 = () => {
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

  //Traigo del contexto la referencia aboutRef para usarla con el navbar y navegar
  const { aboutRef } = useNavBarContext();

  const { texts } = useLanguage();
  useReverseScroll(aboutRef, ColumnRigthRef);

  return (
    <AboutContainer ref={aboutRef}>
      <ColumnLeft>
        <Text ref={refText} className={`${isIntersecting && "visible"}`}>
          {texts.speech1}
        </Text>
        <img src={code} alt="code" loading="lazy" />
        <Text ref={refText2} className={`${isIntersecting2 && "visible"}`}>
          {texts.speech2}
        </Text>
      </ColumnLeft>

      <ColumnRight ref={ColumnRigthRef}>
        <img src={ginasia} alt="grass" loading="lazy" />
        <Text ref={refText3} className={`${isIntersecting3 && "visible"}`}>
          {texts.speech3}
        </Text>
        <img src={setup} alt="setup" loading="lazy" />
      </ColumnRight>
    </AboutContainer>
  );
};
export default Page2;
