import { useContext, useEffect } from "react";
import cv from "@/assets/sebastian siman cv.pdf";
import {
  ContainerIcon,
  SocialBtnDesktop,
  SocialBtnMobile,
  RowIcon,
  CopyBtn,
  Tooltip,
} from "@/style/contact.style";
import { CursorContext } from "@/components/cursor/CustomManager";
import useDeviceType from "@/hook/useDeviceType";
import { useClipboard, useContact } from "@/hook";
import {
  IconCV,
  IconEmail,
  IconGithub,
  IconLinkedin,
  IconCopy,
  IconCVDownload,
} from "@/style/icons";

export const Contact = () => {
  const { handleCursorXs, handleCursorSmall } = useContext(CursorContext);

  const info = [
    {
      to: "mailto:seebaasiman@gmail.com",
      icon: <IconEmail size={"calc(2rem + 2vw)"} />,
      text: "seebaasiman@",
      copy: "seebaasiman@gmail.com",
    },
    {
      to: "https://www.linkedin.com/in/sebasti%C3%A1nsiman/",
      icon: <IconLinkedin size={"calc(2rem + 2vw)"} />,
      text: "sebastiansiman",
      copy: "https://www.linkedin.com/in/sebastiánsiman/",
    },
    {
      to: "https://github.com/SeebaaSiman",
      icon: <IconGithub size={"calc(2rem + 2vw)"} />,
      text: "seebaasiman",
      copy: "https://github.com/SeebaaSiman",
    },
    {
      to: cv,
      icon: <IconCVDownload size={"calc(2rem + 2vw)"} />,
      text: "Sebastián Siman cv",
      copy: cv,
    },
  ];

  const deviceType = useDeviceType();
  const { onActiveIcon, onActiveCopy, openPdf, isActiveIcon, isActiveCopy } =
    useContact();
  const { notSopported, copyError, copied, onClipboard } = useClipboard();
  const onCopy = (copy, index) => {
    onClipboard(copy);
    onActiveCopy(index);
  };

  return (
    <ContainerIcon>
      {info?.map((item, index) => {
        const SocialBtn =
          deviceType === "desktop" ? SocialBtnDesktop : SocialBtnMobile;
        return (
          <RowIcon key={index}>
            <SocialBtn
              onMouseEnter={deviceType === "desktop" ? handleCursorXs : null}
              onMouseLeave={deviceType === "desktop" ? handleCursorSmall : null}
              onClick={
                deviceType !== "desktop" ? () => onActiveIcon(index) : null
              }
              isActive={isActiveIcon[index]}
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

            <CopyBtn
              onMouseEnter={deviceType === "desktop" ? handleCursorXs : null}
              onMouseLeave={deviceType === "desktop" ? handleCursorSmall : null}
              onClick={
                item.text === "Sebastián Siman cv"
                  ? openPdf
                  : () => onCopy(item.copy, index)
              }
            >
              {item.text === "Sebastián Siman cv" ? (
                <IconCV size={"calc(1.2rem + 1.2vw)"} />
              ) : (
                <IconCopy size={"calc(1rem + 1vw)"} />
              )}
            </CopyBtn>
            {isActiveCopy[index] && copied && (
              <Tooltip style={{ color: "green" }}>{item.copy}</Tooltip>
            )}
            {(isActiveCopy[index] && notSopported) ||
              (copyError && (
                <Tooltip style={{ color: "red" }}>
                  {notSopported || copyError}
                </Tooltip>
              ))}
          </RowIcon>
        );
      })}
    </ContainerIcon>
  );
};
