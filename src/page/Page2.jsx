import styled from "styled-components";

const Div = styled.div`
  height: 105vh;
  color: white;
`;
export const Page2 = () => {
  return (
    <Div>
      <h1>About me</h1>
      <h2>Ayudame con mi meta de completar 1000 proyectos como developer!!</h2>
    </Div>
  );
};
//! A medida que se hace scroll el texto aparece del fondo y se scale , al hacer scroll el fondo negro va cambiando cada vez más gris. Al hacer scroll para irse , van desapareciendo, opacidad.
//! En este punto aparece el navbar para ir al home, about me o proyectos y contacto. Aparece desde arriba, con la curvatura como el modal
//! un toggle que cambie el idioma inglés / español
//! puede ser que se use el efecto de que se escribe a máquina, en vez del efecto scalado al aparecer, pero si que se vaya hacia el fondo al hacer scroll
