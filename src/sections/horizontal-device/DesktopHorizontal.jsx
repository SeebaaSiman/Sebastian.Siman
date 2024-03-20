import { useRef } from "react";
import styled from "styled-components";

import { useScrollHorizontal } from "@/hook";
import Page3 from "../../components/Page3";
import Page4 from "../../components/Page4";

const DesktopHorizontal = () => {
  //Creo las referencias del slider y cuantos paneles hay para pasarselo al useScrollHorizontal que usa gsap
  const slider = useRef();
  const panelCount = 2;

  useScrollHorizontal(slider, panelCount);

  return (
    <ContainerHorizontal ref={slider}>
      <Panel className="panel">
        <Page3 />
      </Panel>

      <Panel className="panel">
        <Page4 />
      </Panel>
    </ContainerHorizontal>
  );
};
const ContainerHorizontal = styled.section`
  width: 200%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const Panel = styled.span`
  width: 100vw;
  height: 100vh;
`;
export default DesktopHorizontal;
