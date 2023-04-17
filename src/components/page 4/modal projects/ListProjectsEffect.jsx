import { useState } from "react";
import {
  dataProjects,
  ListProjects,
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
      <ContainerProject >
        {dataProjects.map(({ title }, index) => (
          <ListProjects
            key={index}
            title={title}
            index={index}
            setRotation={handleSetRotation}
            setIndex={setActiveIndex}
          />
        ))}
      </ContainerProject>
      <ContainerImage >
        {dataProjects.map(({ url }, index) => (
          <ImageProjects
            key={index}
            url={url}
            active={activeIndex === index}
            rotationPosition={rotationPosition[index]}
          />
        ))}
      </ContainerImage>
    </>
  );
};
