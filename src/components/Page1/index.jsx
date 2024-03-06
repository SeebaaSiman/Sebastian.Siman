import { useEffect, useRef, useState } from "react";
import avatar from "@/assets/perfil.jpg";
import { ContainerBanner, ContainerMouse, HomeContainer } from "@/style";
import useIntersectionObserver from "@/hook/useIntersectionObserver";
import { ScrollArrowIndicator } from "./ScrollArrowIndicator";
import { SwitchLanguage } from "@/language/SwitchLanguage";
import { MouseScrolling } from "./MouseScrolling";
import { TextChange } from "./TextChange";
import { useNavBarContext } from "/src/hook";

export const Page1 = () => {
  //Estado para que aparezca el mouseScrolling
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1500); //3000
  }, []);

  //Del contexto busco outNavBar para esconder la sección del navbar al estar en el viewport la sección container
  //También traigo del contexto la referencia page1Ref para usarla con el navbar
  const { outNavBar, page1Ref } = useNavBarContext();
  const HomeRef = useRef();
  const inView = useIntersectionObserver(HomeRef, { threshold: 1 });
  useEffect(() => {
    if (inView) {
      outNavBar();
    }
  }, [inView]);

  return (
    <HomeContainer ref={page1Ref}>
      <SwitchLanguage />
      <ContainerBanner ref={HomeRef}>
        <TextChange />
        <img src={avatar} alt="photo perfil" loading="lazy" />
      </ContainerBanner>
      <ContainerMouse>
        {loading ? (
          <>
            <ScrollArrowIndicator />
            <MouseScrolling />
            <ScrollArrowIndicator />
          </>
        ) : null}
      </ContainerMouse>
    </HomeContainer>
  );
};
