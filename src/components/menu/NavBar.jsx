import { useContext } from "react";
import { NavBarContext } from "./NavBarManager";
import { CursorContext } from "../cursor/CustomManager";
import { NavContainer } from "./NavBarStyle";
import { ModalContext } from "../modals";
import { IconsEffect, ListProjectsEffect } from "../page 4";

export const NavBar = () => {
  
  const { handleCursorXs, handleCursorSmall } = useContext(CursorContext);
  const { showNavBar, scrollToSection, page1Ref, aboutRef, page4Ref } =
    useContext(NavBarContext);
  const { openModal } = useContext(ModalContext);
  const handleProjectModal = () => {
    const item = <ListProjectsEffect />;
    const description = "Project";
    openModal(item, description);
    scrollToSection(page1Ref);
  };
  const handleContactModal = () => {
    const item = <IconsEffect />;
    const description = "Contact";
    openModal(item, description);
    scrollToSection(page1Ref);
  };
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
            onClick={handleProjectModal}
          >
            Projects
          </li>
          <li
            onMouseEnter={handleCursorXs}
            onMouseLeave={handleCursorSmall}
            onClick={handleContactModal}
          >
            Contact
          </li>
        </ul>
      )}
    </NavContainer>
  );
};
