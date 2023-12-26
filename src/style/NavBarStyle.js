import styled from "styled-components";
import { device } from "@/style/StyleGlobal";
import { NavItem } from "./effect";

export const NavContainer = styled.nav`
  position: fixed;
  display: flex;
  width: 98%;
  align-items: center;
  margin: 5px;
  z-index: 800;
  justify-content: space-between;
transition: all .4 ease-in-out;
  ul {
    display: flex;
    list-style: none;
    gap: 0.8rem;
    font-size: 1.1rem;
    @media ${device.sm}{
font-size: 1.3rem;
    }
    @media ${device.lg}{
font-size: 1.5rem;
    }
  }

  li {
    ${NavItem}
}
`;
