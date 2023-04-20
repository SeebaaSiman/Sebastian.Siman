import { NavBar, NavBarManager } from "../components";
import { SectionHorizontal, SectionVertical } from "./";
export const TotalSections = () => {
  return (
    <NavBarManager>
      <NavBar />
      <SectionVertical />
      <SectionHorizontal />
    </NavBarManager>
  );
};
