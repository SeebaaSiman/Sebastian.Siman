import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

export const TypingEffect = ({ text, delay = 50 }) => {
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
  /* white-space: nowrap; */
  color: #444444;
  background: #ffffff;
  text-shadow: 1px 0px 1px #cccccc, 0px 1px 1px #eeeeee, 2px 1px 1px #cccccc,
    1px 2px 1px #eeeeee, 3px 2px 1px #cccccc, 2px 3px 1px #eeeeee,
    4px 3px 1px #cccccc, 3px 4px 1px #eeeeee, 5px 4px 1px #cccccc,
    4px 5px 1px #eeeeee, 6px 5px 1px #cccccc, 5px 6px 1px #eeeeee,
    7px 6px 1px #cccccc;
  color: #444444;
  background: #ffffff;
  font-size: calc(1em + 1vw);
  font-family: monospace;
  animation: ${show} 1s ease-in-out forwards;
`;
