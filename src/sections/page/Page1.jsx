import { useContext, useEffect, useRef, useState } from "react";
import avatar from "../../assets/perfil.jpg";
import {
  ContainerBanner,
  ContainerMouse,
  HomeContainer,
  MouseScrolling,
  NavBarContext,
  TextChange,
} from "../../components";
import useIntersectionObserver from "../../hook/useIntersectionObserver";

export const Page1 = () => {
  //Estado para que aparezca el mouseScrolling
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  //Del contexto busco outNavBar para esconder la sección del navbar al estar en el viewport la sección container
  //También traigo del contexto la referencia page1Ref para usarla con el navbar
  const { outNavBar, page1Ref } = useContext(NavBarContext);
  const HomeRef = useRef();
  const inView = useIntersectionObserver(HomeRef, { threshold: 0 });
  useEffect(() => {
    if (inView) {
      outNavBar();
    }
  }, [inView]);
  return (
    <>
      <HomeContainer ref={page1Ref}>
        <ContainerBanner ref={HomeRef}>
          <TextChange />
          <img src={avatar} />
        </ContainerBanner>
        <ContainerMouse>{loading ? <MouseScrolling /> : null}</ContainerMouse>
      </HomeContainer>
    </>
  );
};
