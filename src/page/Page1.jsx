import { useEffect, useState } from "react";
import avatar from "../assets/perfil.jpg";
import {
  ContainerBanner,
  ContainerMouse,
  Home,
  TextChange,
  MouseScrolling,
} from "../components/page 1";
export const Page1 = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  return (
    <Home>
      <ContainerBanner>
        <TextChange />
        <img src={avatar} />
      </ContainerBanner>
      <ContainerMouse>{loading ? <MouseScrolling /> : null}</ContainerMouse>
    </Home>
  );
};
