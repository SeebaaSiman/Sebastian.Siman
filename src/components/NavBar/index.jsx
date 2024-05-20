import { NavContainer } from "@/style/NavBarStyle";
import { Contact } from "@/components/Page4/contact";
import { SectionsProjects } from "../Page4/Projects/SectionsProjects";
import {
  useCustomCursorContext,
  useLanguage,
  useNavBarContext,
  useModalContext,
} from "/src/hook";

const NavBar = ({ scrollValue }) => {
  const { handleCursorXs, handleCursorSmall } = useCustomCursorContext();

  const {  scrollToSection, page1Ref, aboutRef } =
    useNavBarContext();

  const { onOpenModal, TextModal } = useModalContext();

  const handleModal = (description) => {
    let item;
    if (description === TextModal.PROJECT) {
      item = <SectionsProjects />;
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
  
      {scrollValue > 100 && (
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
export default NavBar;
