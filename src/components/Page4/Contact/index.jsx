import { useContext, useState } from "react";
import cv from "@/assets/sebastian siman cv.pdf";
import {
  ContainerIcon,
  SocialBtnDesktop,
  SocialBtnMobile,
} from "@/style/contact.style";
import { CursorContext } from "@/components/cursor/CustomManager";
import useDeviceType from "@/hook/useDeviceType";
import { IconCV, IconEmail, IconGithub, IconLinkedin } from "@/style/icons";

export const Contact = () => {
  const { handleCursorXs, handleCursorSmall } = useContext(CursorContext);
  const iconSize = "calc(2rem + 2vw)";
  const info = [
    {
      to: "mailto:seebaasiman@gmail.com",
      icon: <IconEmail size={iconSize} />,
      text: "seebaasiman@",
    },
    {
      to: "https://www.linkedin.com/in/sebasti%C3%A1nsiman/",
      icon: <IconLinkedin size={iconSize} />,
      text: "sebastiansiman",
    },
    {
      to: "https://github.com/SeebaaSiman",
      icon: <IconGithub size={iconSize} />,
      text: "seebaasiman",
    },
    {
      to: cv,
      icon: <IconCV size={iconSize} />,
      text: "Sebastián Siman cv",
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
            download
          >
            <>{item.icon}</>
            <span>
              {deviceType === "desktop" ? (
                `${item.text}`
              ) : (
                <a href={item.to}>{item.text} </a>
              )}
            </span>
          </SocialBtn>
        );
      })}
    </ContainerIcon>
  );
};
