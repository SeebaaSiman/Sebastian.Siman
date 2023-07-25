import { useContext } from "react";
import { NavBarContext } from "./NavBarManager";
import { CursorContext } from "../cursor/CustomManager";
import { NavContainer } from "./NavBarStyle";
import { ModalContext } from "../modals";
import { IconsEffect, ListProjectsEffect } from "../page 4";
import { useLanguage } from "../../language/LanguageContext";

export const NavBar = () => {
  const { handleCursorXs, handleCursorSmall } = useContext(CursorContext);
  const { showNavBar, scrollToSection, page1Ref, aboutRef } =
    useContext(NavBarContext);

  const { openModal } = useContext(ModalContext);
  const handleProjectModal = () => {
    const item = <ListProjectsEffect />;
    const description = "Projects";
    openModal(item, String(description));
    setTimeout(() => {
      handleCursorSmall();
      scrollToSection(page1Ref);
    }, 500);
  };
  const handleContactModal = () => {
    const item = <IconsEffect />;
    const description = "Contact";
    openModal(item, String(description));
    setTimeout(() => {
      handleCursorSmall();
      scrollToSection(page1Ref);
    }, 500);
  };
  const { texts } = useLanguage();
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
            {texts.about}
          </li>
          <li
            onMouseEnter={handleCursorXs}
            onMouseLeave={handleCursorSmall}
            onClick={handleProjectModal}
          >
            {texts.project}
          </li>
          <li
            onMouseEnter={handleCursorXs}
            onMouseLeave={handleCursorSmall}
            onClick={handleContactModal}
          >
            {texts.contact}
          </li>
        </ul>
      )}
    </NavContainer>
  );
};
