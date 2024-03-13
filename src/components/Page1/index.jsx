import { useEffect, useRef, useState } from "react";
import avatar from "@/assets/perfil.jpg";
import { ContainerBanner, ContainerMouse, HomeContainer, Arrow } from "@/style";
import useIntersectionObserver from "@/hook/useIntersectionObserver";
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
  const { outNavBar, inNavBar, page1Ref } = useNavBarContext();
  const HomeRef = useRef();
  const inView = useIntersectionObserver(HomeRef, { threshold: 0.8 });
  useEffect(() => {
    if (inView) {
      outNavBar();
    } else if (loading && !inView) {
      inNavBar();
    }
  }, [inView]);
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else if (!isOpen) {
  //     document.body.style.overflow = "auto";
  //   }
  // }, [isOpen]);
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
            <Arrow />
            <MouseScrolling />
            <Arrow />
          </>
        ) : null}
      </ContainerMouse>
    </HomeContainer>
  );
};
