import styled from "styled-components";
import { ProjectItem } from "./ProjectItem";
import { ButtonVertical } from "../Horizontal-sections/ButtonVertical";
import { useCustomCursorContext } from "/src/hook";
export const ListProjects = ({
  listArray,
  setVerticalShow,
  verticalShow,
  setInfoActive,
  toggleSectionsHorizontal,
}) => {
  const { handleCursorXs, handleCursorSmall } = useCustomCursorContext();

  return (
    <SectionProject verticalShow={verticalShow}>
      {!verticalShow ? (
        <>
          {listArray?.map((project, index) => (
            <ProjectItem
              key={index}
              heading={project.title}
              imgSrc={project.img}
              project={project}
              setInfoActive={setInfoActive}
              toggleSectionsHorizontal={toggleSectionsHorizontal}
              handleCursorXs={handleCursorXs}
              handleCursorSmall={handleCursorSmall}
            />
          ))}
          <ButtonVertical
            handleCursorXs={handleCursorXs}
            handleCursorSmall={handleCursorSmall}
            setVerticalShow={setVerticalShow}
            verticalShow={verticalShow}
          />
        </>
      ) : (
        <>
          <ButtonVertical
            handleCursorXs={handleCursorXs}
            handleCursorSmall={handleCursorSmall}
            setVerticalShow={setVerticalShow}
            verticalShow={verticalShow}
          />
          {listArray?.map((project, index) => (
            <ProjectItem
              key={index}
              heading={project.title}
              imgSrc={project.img}
              project={project}
              setInfoActive={setInfoActive}
              toggleSectionsHorizontal={toggleSectionsHorizontal}
              handleCursorXs={handleCursorXs}
              handleCursorSmall={handleCursorSmall}
            />
          ))}
        </>
      )}
    </SectionProject>
  );
};

const SectionProject = styled.section`
  height: 100vh;
  width: 100vw;
  padding-top: ${(props) => (props.verticalShow ? "0rem" : "2rem")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
