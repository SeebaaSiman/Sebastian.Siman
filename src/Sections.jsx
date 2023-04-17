import { useRef } from "react";
import { Page1, Page2, Page3, Page4 } from "./page";
import { ContainerHorizontal, Panel } from "./style/sectionsStyle";
import { useScrollHorizontal } from "./hook/useScrollHorizontal";

export const Sections = () => {
  const slider = useRef();
  const panelCount = 2;
  useScrollHorizontal(slider, panelCount);

  return (
    <>
      <Page1 />
      <Page2 />
      <ContainerHorizontal ref={slider}>
        <Panel className="panel">
          <Page3 />
        </Panel>
        <Panel className="panel">
          <Page4 />
        </Panel>
      </ContainerHorizontal>
    </>
  );
};
