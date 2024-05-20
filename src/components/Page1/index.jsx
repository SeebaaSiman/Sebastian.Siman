import { useEffect,  useState } from "react";
import avatar from "@/assets/perfil.jpg";
import { ContainerBanner, ContainerMouse, HomeContainer, Arrow } from "@/style";
import { SwitchLanguage } from "@/language/SwitchLanguage";
import { MouseScrolling } from "./MouseScrolling";
import { TextChange } from "./TextChange";
import { useNavBarContext } from "/src/hook";

const Page1 = ({ scrollValue }) => {
  //Estado para que aparezca el mouseScrolling
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1500); //3000
  }, []);

  //Traigo del contexto la referencia page1Ref para usarla con el navbar
  const { page1Ref } = useNavBarContext();

  return (
    <HomeContainer ref={page1Ref}>
      {scrollValue < 100 && <SwitchLanguage />}

      <ContainerBanner>
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
export default Page1;
