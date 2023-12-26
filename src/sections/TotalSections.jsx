import { NavBar, NavBarManager } from "@/components/menu";
import { SectionHorizontal, SectionVertical } from "./";
import { ModalManager } from "@/components/Modal/ModalManager";
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
