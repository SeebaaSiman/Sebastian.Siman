import styled from "styled-components";
import { PruebaModal } from "../components/page 4/modal/PruebaModal";

export const Page3 = () => {
  return (
    <Container>
      <Modal>
        <PruebaModal />
      </Modal>
      <p>
        Mi experiencia se centra en lenguajes y frameworks como HTML, CSS,
        JavaScript y React. Como desarrollador web, mi objetivo a corto plazo es
        desafiarme a mí mismo y crear 1000 proyectos en los que pueda aplicar y
        mejorar mis habilidades. <br />
        <br /> ¿Te animas a ser parte de este reto y acompañarme en este camino
        hacia el éxito?
      </p>
    </Container>
  );
};
const Container = styled.div`
  height: 100vh;
  width: 100%;
  color: black;
  background-color: white;
  p {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    font-size: calc(1em + 1vw);
  }
`;
//títulos 2rem
const Modal = styled.div`
  display: absolute;
  top: 0;
  left: 0;
`;
