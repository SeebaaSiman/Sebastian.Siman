import { NavBarProvider, ModalProvider } from "/src/context";
import { SectionHorizontal, SectionVertical } from "./";
import { NavBar } from "../components/NavBar";
export const TotalSections = () => {
  return (
    <ModalProvider>
      <NavBarProvider>
        <NavBar />
        <SectionVertical />
        <SectionHorizontal />
      </NavBarProvider>
    </ModalProvider>
  );
};
