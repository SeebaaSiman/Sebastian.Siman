import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { ListProjects, ProjectInfo } from "/src/components";

export const HorizontalCollapse = ({
  setVerticalShow,
  verticalShow,
  listArray,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [first, setFirst] = useState(false);

  const [infoActive, setInfoActive] = useState(null);

  const toggleSectionsHorizontal = () => {
    setIsOpen(!isOpen);
    setFirst(true);
  };

  return (
    <>
      <ProjectContainer
        isOpen={isOpen}
        className={`${first ? "animation" : ""}`}
      >
        <ListProjects
          listArray={listArray}
          setVerticalShow={setVerticalShow}
          verticalShow={verticalShow}
          setInfoActive={setInfoActive}
          toggleSectionsHorizontal={toggleSectionsHorizontal}
        />
      </ProjectContainer>

      <InfoContainer isOpen={isOpen} className={`${first ? "animation" : ""}`}>
        <ProjectInfo
          toggleSectionsHorizontal={toggleSectionsHorizontal}
          setInfoActive={setInfoActive}
          infoActive={infoActive}
        />
      </InfoContainer>
    </>
  );
};

const show1 = keyframes`
  from {
   width: 0;
  opacity: 0;
  }
  to {
   opacity: 1;
    width: 100vw;
  }
`;

const show2 = keyframes`
  from {
   opacity: 1;
    width: 100vw;
    transform: translateX(0);

  }
  to {
   transform: translateX(-100%);
   width: 0;
  opacity: 0;
  }
`;

const ProjectContainer = styled.div`
  background-color: ${(props) => props.theme.bgApp};
  width: 100vw;
  height: 100vh;
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  background-color: ${(props) => props.theme.bgApp};
  width: 0;
  /* width: 100vw; */
  z-index: 800;
  transform: translateX(0);
  opacity: 0;

  &.animation {
    animation: ${({ isOpen }) => (isOpen ? show1 : show2)} 0.5s ease-in-out
      forwards;
    transition: all 0.5s ease-in-out;
  }
`;
