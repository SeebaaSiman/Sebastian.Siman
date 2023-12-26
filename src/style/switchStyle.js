import styled from "styled-components";
import { device } from "@/style/StyleGlobal";
import { NavItem } from "./effect";

export const SwitchContainer = styled.ul`
display: flex;
font-size: 1.1rem;
gap: 0.8rem;
list-style: none;
position:absolute;
right: 0%;
top:0%;
z-index: 800;
margin:5px;
    @media ${device.sm}{
font-size: 1.3rem;
    }
    @media ${device.lg}{
font-size: 1.5rem;
    }

  li {
    display: flex;
  justify-content: center;
  align-items: center;
  gap:5px;
${NavItem}
     }
    img{
  height: 1.1rem;
    @media ${device.sm}{
height: 1.3rem;
    }
    @media ${device.lg}{
height: 1.5rem;
    }}
`