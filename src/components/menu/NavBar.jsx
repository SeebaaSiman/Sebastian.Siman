import { useContext } from "react";
import { NavBarContext } from "./NavBarManager";
import { CursorContext } from "../cursor/CustomManager";
import { NavContainer } from "./NavBarStyle";

export const NavBar = ({ scrollToSection, page1Ref, aboutRef }) => {
  const { handleCursorXs, handleCursorSmall } = useContext(CursorContext);
  const { showNavBar } = useContext(NavBarContext);
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
          <li onMouseEnter={handleCursorXs} onMouseLeave={handleCursorSmall}>
            Projects
          </li>
          <li onMouseEnter={handleCursorXs} onMouseLeave={handleCursorSmall}>
            Contact
          </li>
        </ul>
      )}
    </NavContainer>
  );
};
