import * as Unicons from "@iconscout/react-unicons";
import { ContainerIcon, SocialBtn } from "./IconsStyles";
import { useContext } from "react";
import { CursorContext } from "../../cursor/CustomManager";

export const IconsEffect = () => {
  const { handleCursorXs, handleCursorSmall } = useContext(CursorContext);
  const iconSize = "calc(2rem + 2vw)";
  const info = [
    {
      to: "",
      icon: <Unicons.UilAt color="#f1d222" size={iconSize} />,
      text: "seebaasiman@",
    },
    {
      to: "",
      icon: <Unicons.UilLinkedinAlt color="#0e76a8" size={iconSize} />,
      text: "in/seebaasiman",
    },
    {
      to: "",
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
        >
          <a href={item.to}>{item.icon}</a>
          <span>{item.text}</span>
        </SocialBtn>
      ))}
    </ContainerIcon>
  );
};
