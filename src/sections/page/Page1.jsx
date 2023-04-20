import { useContext, useEffect, useRef, useState, forwardRef } from "react";
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

export const Page1 = forwardRef((props, ref) => {
  //Estado para que aparezca el mouseScrolling
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  //Del contexto busco outNavBar para esconder la sección del navbar al estar en el viewport la sección container
  const { outNavBar } = useContext(NavBarContext);
  const HomeRef = useRef();
  const inView = useIntersectionObserver(HomeRef, { threshold: 0 });
  useEffect(() => {
    if (inView) {
      outNavBar();
    }
  }, [inView]);
  //Doy a homeContainer la referencias traida por forwardsRef desde el componente abuelo totalSections para darle smoothScroll desde el navbar

  return (
    <>
      <HomeContainer ref={ref}>
        <ContainerBanner ref={HomeRef}>
          <TextChange />
          <img src={avatar} />
        </ContainerBanner>
        <ContainerMouse>{loading ? <MouseScrolling /> : null}</ContainerMouse>
      </HomeContainer>
    </>
  );
});
