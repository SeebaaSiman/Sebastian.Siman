import styled from "styled-components";
import { device } from "@/style/StyleGlobal";
import { UnderlineHover } from "./effect";

export const SwitchContainer = styled.ul`
display: flex;
font-size: 1.5rem;
gap:1rem;
list-style: none;
position:absolute;
right: 1%;
top:0%;
z-index: 800;
margin:6px;

@media ${device.lg} {
    font-size: 1.8rem;
  }
  li {
    display: flex;
  justify-content: center;
  align-items: center;
  gap:6px;
${UnderlineHover}
     }
    img{
height: 1.8rem;
    @media ${device.lg}{
height: 2.2rem;
    }
    }
`

