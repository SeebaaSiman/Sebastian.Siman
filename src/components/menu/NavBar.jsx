import { useContext } from "react";
import { NavBarContext } from "./NavBarManager";
import { CursorContext } from "../cursor/CustomManager";
import { NavContainer } from "./NavBarStyle";
import { useModal } from "../../hook/useModal";
import { ListProjectsEffect } from "../page 4";

export const NavBar = () => {
  const { handleCursorXs, handleCursorSmall } = useContext(CursorContext);
  const { showNavBar, scrollToSection, page1Ref, aboutRef, page4Ref } =
    useContext(NavBarContext);
  // const { toggleModal } = useModal();

  // const handleOpenProjectsModal = () => {
  //   toggleModal(<ListProjectsEffect />);
  // };
  return (
    <NavContainer>
      <ul>
        <li
          onMouseEnter={handleCursorXs}
          onMouseLeave={handleCursorSmall}
          onClick={() => scrollToSection(page1Ref)}
        >
          SEBASTIÁN SIMAN
        </li>
      </ul>
      {showNavBar && (
        <ul>
          <li
            onMouseEnter={handleCursorXs}
            onMouseLeave={handleCursorSmall}
            onClick={() => scrollToSection(aboutRef)}
          >
            About
          </li>
          <li
            onMouseEnter={handleCursorXs}
            onMouseLeave={handleCursorSmall}
            onClick={() => scrollToSection(page4Ref)}
          >
            Projects
          </li>
          <li
            onMouseEnter={handleCursorXs}
            onMouseLeave={handleCursorSmall}
            onClick={() => scrollToSection(page4Ref)}
          >
            Contact
          </li>
        </ul>
      )}
    </NavContainer>
  );
};
