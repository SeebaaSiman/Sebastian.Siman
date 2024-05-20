import styled from "styled-components";
import { UnderlineHover } from "./effect";
export const NavContainer = styled.nav`  font-family: "Oxygen";

  position: fixed;
  display: flex;
  width: 98%;
  align-items: center;
  margin: 6px;
  z-index: 800;
  justify-content: space-between;
transition: all .4 ease-in-out;
  ul {  font-family: "Oxygen";

    display: flex;
    list-style: none;
    gap: 1rem;
   }
  li {  font-family: "Oxygen";

    position: relative;
    ${UnderlineHover}
}
`;
