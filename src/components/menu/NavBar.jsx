import { useContext } from "react";
import { NavBarContext } from "./NavBarManager";
import { NavContainer } from "@/style/NavBarStyle";
import { Contact } from "@/components/Page4/contact";
import { useLanguage } from "@/language/LanguageContext";
import { CursorContext } from "../cursor/CustomManager";
import { ListProjectsEffect } from "../Page4/Projects/ListProjectsEffect";
import { ModalContext } from "../Modal/ModalManager";

export const NavBar = () => {
  const { handleCursorXs, handleCursorSmall } = useContext(CursorContext);

  const { showNavBar, scrollToSection, page1Ref, aboutRef } =
    useContext(NavBarContext);

  const { onOpenModal, TextModal } = useContext(ModalContext);

  // const handleProjectModal = () => {
  //   const item = <ListProjectsEffect />;
  //   const description = "Projects";
  //   onOpenModal(item, String(description));
  //   setTimeout(() => {
  //     handleCursorSmall();
  //     scrollToSection(page1Ref);
  //   }, 500);
  // };
  // const handleContactModal = () => {
  //   const item = <Contact />;
  //   const description = "Contact";
  //   onOpenModal(item, String(description));
  //   setTimeout(() => {
  //     handleCursorSmall();
  //     scrollToSection(page1Ref);
  //   }, 500);
  // };

  const handleModal = (description) => {
    let item;
    if (description === TextModal.PROJECT) {
      item = <ListProjectsEffect />;
    } else if (description === TextModal.CONTACT) {
      item = <Contact />;
    }
    onOpenModal(item, String(description));
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
            onClick={() => handleModal(TextModal.PROJECT)}
          >
            {texts.project}
          </li>
          <li
            onMouseEnter={handleCursorXs}
            onMouseLeave={handleCursorSmall}
            onClick={() => handleModal(TextModal.CONTACT)}
          >
            {texts.contact}
          </li>
        </ul>
      )}
    </NavContainer>
  );
};
