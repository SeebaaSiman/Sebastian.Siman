import { ProjectItem } from "./ProjectItem";
import { ButtonVertical } from "../Horizontal-sections/ButtonVertical";
import { useCustomCursorContext } from "/src/hook";
import { SectionProject } from "/src/style/projects.style";
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
