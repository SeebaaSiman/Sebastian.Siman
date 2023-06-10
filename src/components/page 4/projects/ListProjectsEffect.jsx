import { useState } from "react";
import {
  dataProjects,
  Projects,
  ImageProjects,
  ContainerImage,
  ContainerProject,
} from "./";

export const ListProjectsEffect = () => {
  //El useState será un array con una longitud igual a la cantidad de elementos en la variable "dataProjects" y con fill todos los elementos se inicializan en 0
  const [rotationPosition, setRotation] = useState(
    new Array(dataProjects.length).fill(0)
  );
  const [activeIndex, setActiveIndex] = useState(-1);

  //efecto de rotación de las imágenes
  const handleSetRotation = (itemIndex) => {
    // Random between -7 and 7
    const newRotation =
      Math.random() * 7 * (Math.round(Math.random()) ? 1 : -1);

    const tempState = [...rotationPosition];
    tempState[itemIndex] = newRotation;
    setRotation(tempState);
    setActiveIndex(itemIndex);
  };

  return (
    <>
      <ContainerProject>
        {dataProjects.map(({ title, url }, index) => (
          <Projects
            key={index}
            title={title}
            url={url}
            index={index}
            setRotation={handleSetRotation}
            setIndex={setActiveIndex}
            activeIndex={activeIndex}
          />
        ))}
      </ContainerProject>

      <ContainerImage>
        {dataProjects.map(({ img }, index) => (
          <ImageProjects
            key={index}
            img={img}
            active={activeIndex === index}
            rotationPosition={rotationPosition[index]}
          />
        ))}
      </ContainerImage>
    </>
  );
};
