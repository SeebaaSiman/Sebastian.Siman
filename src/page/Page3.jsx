import styled from "styled-components";

export const Page3 = () => {
  return (
    <Container>
      <p>
        3. Proyectos personales: si has trabajado en algún proyecto personal,
        puedes hablar sobre ellos y compartir capturas de pantalla o enlaces
        para que los visitantes de tu sitio puedan ver lo que has creado.
      </p>
      <p>
        4. Metas: habla sobre tus metas como desarrollador, tanto a corto como a
        largo plazo, y cómo planeas alcanzarlas.
      </p>
      <h2>Ayudame con mi meta de completar 1000 proyectos como developer!!</h2>
    </Container>
  );
};
const Container = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  background-color: grey;
`;
