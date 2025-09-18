import styled from "styled-components";
import { languageShowOut, languageShowIn, ScaleUpRight } from "./animations";

export const SwitchLanguageStyle = styled.ul`
  font-family: "Bebas Neue", sans-serif;
  width: 100px;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  font-size: 1.2rem;
  list-style: none;
  position: relative;
  overflow: hidden;
  animation: ${ScaleUpRight} 0.6s ease-in-out;`
export const LanguageOption = styled.li`
   position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100px;
  height: 35px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
      text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.85);

  img{
    width: 2rem;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
  }

  &.hidden {
  pointer-events: none;
  animation: ${languageShowOut} 0.5s ease-in-out forwards;
}

&.visible {
  pointer-events: auto;
  animation: ${languageShowIn} 0.5s ease-in-out forwards;
}
  `