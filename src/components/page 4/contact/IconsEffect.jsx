import * as Unicons from "@iconscout/react-unicons";
import { useContext } from "react";
import {
  ContainerIcon,
  SocialBtnDesktop,
  SocialBtnMobile,
} from "./IconsStyles";
import { CursorContext } from "../../cursor/CustomManager";
import useDeviceType from "../../../hook/useDeviceType";
import { useState } from "react";

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
  const deviceType = useDeviceType();

  const [isActive, setIsActive] = useState(new Array(info.length).fill(false));

  const onActive = (index) => {
    setIsActive((prevIsActive) => {
      const newIsActive = [...prevIsActive];
      // Cerrar todos los botones excepto el seleccionado
      for (let i = 0; i < newIsActive.length; i++) {
        if (i !== index) {
          newIsActive[i] = false;
        }
      }
      // Alternar el estado del botón seleccionado
      newIsActive[index] = !newIsActive[index];
      return newIsActive;
    });
  };
  return (
    <ContainerIcon>
      {info.map((item, index) => {
        const SocialBtn =
          deviceType === "desktop" ? SocialBtnDesktop : SocialBtnMobile;
        return (
          <SocialBtn
            key={index}
            index={index}
            onMouseEnter={deviceType === "desktop" ? handleCursorXs : null}
            onMouseLeave={deviceType === "desktop" ? handleCursorSmall : null}
            onClick={deviceType !== "desktop" ? () => onActive(index) : null}
            isActive={isActive[index]}
            href={item.to}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>{item.icon}</div>
            <span>
              {deviceType === "desktop" ? (
                `${item.text}`
              ) : (
                <a href={item.to} target="_blank" rel="noopener noreferrer">
                  {item.text}{" "}
                </a>
              )}
            </span>
          </SocialBtn>
        );
      })}
    </ContainerIcon>
  );
};
