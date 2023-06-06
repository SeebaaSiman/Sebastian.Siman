import * as Unicons from "@iconscout/react-unicons";
import { ContainerIcon, SocialBtn } from "./IconsStyles";
import { useContext } from "react";
import { CursorContext } from "../../cursor/CustomManager";

export const IconsEffect = () => {
  const { handleCursorXs, handleCursorSmall } = useContext(CursorContext);
  const iconSize = "calc(2rem + 2vw)";
  const info = [
    {
      to: "mailto:seebaasiman@",
      icon: <Unicons.UilAt color="#f1d222" size={iconSize} />,
      text: "seebaasiman@",
    },
    {
      to: "https://www.linkedin.com/in/sebasti%C3%A1nsiman/",
      icon: <Unicons.UilLinkedinAlt color="#0e76a8" size={iconSize} />,
      text: "sebastiansiman",
    },
    {
      to: "https://github.com/SeebaaSiman",
      icon: <Unicons.UilGithubAlt color="#333" size={iconSize} />,
      text: "seebaasiman",
    },
  ];
  return (
    <ContainerIcon>
      {info.map((item, index) => (
        <SocialBtn
          key={index}
          onMouseEnter={handleCursorXs}
          onMouseLeave={handleCursorSmall}
          href={item.to}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>{item.icon}</div>
          <span>{item.text}</span>
        </SocialBtn>
      ))}
    </ContainerIcon>
  );
};
