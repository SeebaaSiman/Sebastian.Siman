import { useRef } from "react";
import { ContainerHorizontal, Panel } from "../style/sectionsStyle";
import { useScrollHorizontal } from "../hook/useScrollHorizontal";
import { Page3, Page4 } from "./page/";

export const SectionHorizontal = () => {
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
