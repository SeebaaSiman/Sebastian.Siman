import { scaleUpCenter } from "./animations";
import styled from "styled-components";

export const HomeStyle = styled.main`
 position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
   background-color: #111827;
  color: #e6e4e2;
  &.idle-cursor {
  cursor: none;
}
`
export const HomeOutletStyle = styled.section`
background-color: #000;
  /* background: #e0e5ec; */

height: 100dvh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  scale: 2;
  transition: all 1s ease-in-out;
&.active {
  position: relative;
  scale: 1;
  transition: all 1s ease-in-out;
}
`
export const SplitSectionStyle = styled.aside`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 51%;
  background-color: #111827;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  z-index: 800;
  transition: all 2.2s cubic-bezier(0.48, 0.89, 0.35, 1);
  &.left {
  left: 0;
  transform: translateX(0%);
  box-shadow: 15px 0 30px rgba(0, 0, 0, 0.5);
}

&.right {
  right: 0;
  transform: translateX(0%);
  box-shadow: -15px 0 30px rgba(0, 0, 0, 0.5);
}

&.left.open {
  transform: translateX(-100%);
}

&.right.open {
  transform: translateX(100%);
}
`
export const SplitContentTopStyle = styled.div`
 display: flex;
 justify-content: ${props => props.$right ? "end" : "start"};
 align-items: start;
 width: 100%;
 height: 8vh;
`
export const SplitContentMiddleStyle = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  width: 100%;
  height: 55vh;
    img {
    max-width: 80%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 1px 2px 1rem rgba(0, 0, 0, 0.6);
    &:hover{
    box-shadow: 1px 2px 1rem rgba(0, 0, 0, 0.85);

    }
  }
  animation: ${scaleUpCenter} 0.6s ease-in-out forwards;
`
export const SplitContentBottomStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:${props => props.$right ? "end" : "start"};
  gap: 8px;
  width: 100%;
  height: 8vh;
  p{
    font-family: "Boska", sans-serif;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.85);
  }
  hr {
    width: 70%;
    height: 1px;
    border-radius: 30%;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.8);
  }
  div {
    display: flex;
    gap: 22px;
    align-items: center;
  }
`
