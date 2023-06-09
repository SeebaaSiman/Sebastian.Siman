import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { device } from "../../style/StyleGlobal";

export const TypingEffect = ({ text, delay = 40 }) => {
  //typingText es el texto que se va a mostrar en el efecto de escribir
  const [typingText, setTypingText] = useState("");
  //currentIndex es la posición actual del cursor en el texto original.
  const [currentIndex, setCurrentIndex] = useState(0);

  // se ejecuta cada vez que el componente se renderiza y comprueba si se ha llegado al final del texto original. Si no es así, crea un temporizador que incrementa el currentIndex en el tiempo especificado en la prop delay.
  useEffect(() => {
    if (currentIndex < text.length) {
      const timerId = setTimeout(() => {
        setCurrentIndex((currentIndex) => currentIndex + 1);
      }, delay);
      return () => clearTimeout(timerId);
    }
  }, [currentIndex, delay, text.length]);

  // se ejecuta cada vez que se actualiza currentIndex, y establece el texto que se va a mostrar en el efecto de escribir como un subconjunto del texto original utilizando el método slice().
  useEffect(() => {
    setTypingText(text.slice(0, currentIndex));
  }, [text, currentIndex]);

  return <Text>{typingText}</Text>;
};
const show = keyframes`
 from {
        width: 0;
      }
`;
const Text = styled.span`
  background: transparent;
  font-size: calc(1em + 1vw);
  font-family: "Oxygen", sans-serif;
  animation: ${show} 1s ease-in-out forwards;
  &:first-letter {
    font-weight: bold;
  }

  @media ${device.md} {
    font-size: 2.3rem;
  }
  @media ${device.lg} {
    font-size: 2.8rem;
  }
`;
