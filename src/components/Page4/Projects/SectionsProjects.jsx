import { useState } from "react";
import styled from "styled-components";
import { HorizontalCollapse } from "/src/components/Page4/Projects/Horizontal-sections/HorizontalCollapse";
import { dataProject } from "/src/data/dataProject";

export const SectionsProjects = () => {
  const [verticalShow, setVerticalShow] = useState(false);
  const projects = dataProject();

  const depurDataProject = projects.slice(0, 3);
  const depurdataProject = projects.slice(3);

  return (
    <ContainerSection>
      <VerticalFirstPage active={verticalShow}>
        <HorizontalCollapse
          setVerticalShow={setVerticalShow}
          verticalShow={verticalShow}
          listArray={depurDataProject}
        />
      </VerticalFirstPage>

      <VerticalSecondPage active={verticalShow}>
        <HorizontalCollapse
          setVerticalShow={setVerticalShow}
          verticalShow={verticalShow}
          listArray={depurdataProject}
        />
      </VerticalSecondPage>
    </ContainerSection>
  );
};

const ContainerSection = styled.div`
  height: 100vh;
  width: 100vw;
  transition: all 0.5s ease-in-out;
  /* background-color: ${(props) => props.theme.bgApp}; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const VerticalDefault = styled.section`
  /* background-color: ${(props) => props.theme.bgApp}; */
  position: relative;
  color: black;
  width: 100vw;
  transition: all 0.5s ease-in-out;
`;
const VerticalFirstPage = styled(VerticalDefault)`
  height: ${(props) => (props.active ? "0" : "100vh")};
  opacity: ${(props) => (props.active ? "0" : "1")};
`;
const VerticalSecondPage = styled(VerticalDefault)`
  height: ${(props) => (props.active ? "100vh" : "0")};
  opacity: ${(props) => (props.active ? "1" : "0")};
`;
