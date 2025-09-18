import styled, { css } from "styled-components";

export const HorizontalScrollContainer = styled.div`
  /* padding: 1rem; */
  display: flex;
  width: 200%; /* Cambia el ancho para la cantidad de contenido */
  scroll-behavior: smooth;
  gap: 2rem;
  transition: all 0.8s ease-in-out;
  background-color: #000;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Capa de superposición oscura */
    pointer-events: none; /* Permitir la interacción a través de la capa */
  }
 `;

export const Content = styled.div`
  position: relative;
  width: 100vw; /* Cada contenido ocupa el viewport width */
   height: 100%;
  scroll-snap-align: start;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;
