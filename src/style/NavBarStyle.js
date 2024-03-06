import styled from "styled-components";
import { UnderlineHover } from "./effect";

export const NavContainer = styled.nav`
  position: fixed;
  display: flex;
  width: 98%;
  align-items: center;
  margin: 6px;
  z-index: 800;
  justify-content: space-between;
transition: all .4 ease-in-out;
  ul {
    display: flex;
    list-style: none;
    gap: 1rem;
   }
  li {
    position: relative;
    ${UnderlineHover}
}
`;
