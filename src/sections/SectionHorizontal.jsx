import { useRef } from "react";
import { ContainerHorizontal, Panel } from "../style/sectionsStyle";
import { useScrollHorizontal } from "../hook/useScrollHorizontal";
import { Page3, Page4 } from "./page/";
import { forwardRef } from "react";

export const SectionHorizontal = forwardRef(
  ({ projectRef, contactRef }, ref) => {
    //Creo las referencias del slider y cuantos paneles hay para pasarselo al useScrollHorizontal que usa gsap
    const slider = useRef();
    const panelCount = 2;
    useScrollHorizontal(slider, panelCount);
    //Las referencias que recibo de TotalSections por medio de forwardRef
    return (
      <ContainerHorizontal ref={slider}>
        <Panel className="panel">
          <Page3 />
        </Panel>
        <Panel className="panel">
          <Page4 projectRef={projectRef} contactRef={contactRef} />
        </Panel>
      </ContainerHorizontal>
    );
  }
);
