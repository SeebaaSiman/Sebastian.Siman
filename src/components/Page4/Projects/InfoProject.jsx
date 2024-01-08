import { Fragment } from "react";
import { ContainerInfoProject } from "@/style/projects.style";
import {
  IconCss,
  IconHtml,
  IconJavaScript,
  IconReact,
  iconSize,
} from "@/style/icons";
import { IconTech } from "../../../data/dataProjects";
export const InfoProject = ({ tech }) => {
  const iconMapping = {
    [IconTech.HTML]: <IconHtml />,
    [IconTech.CSS]: <IconCss />,
    [IconTech.REACT]: <IconReact />,
    // Otros mapeos para diferentes tecnologías si las tienes...
  };
  return (
    <ContainerInfoProject>
      <div>
        {tech?.icon?.map((techName, index) => (
          <Fragment key={index}>{iconMapping[techName]}</Fragment>
        ))}
      </div>
      <span>
        {tech?.text?.map((techName, index) => (
          <p key={index}>{techName}</p>
        ))}
      </span>
    </ContainerInfoProject>
  );
};
