import { ModalManager, NavBar, NavBarManager } from "../components";
import { SectionHorizontal, SectionVertical } from "./";
export const TotalSections = () => {
  return (
    <ModalManager>
      <NavBarManager>
        <NavBar />
        <SectionVertical />
        <SectionHorizontal />
      </NavBarManager>
    </ModalManager>
  );
};
