import useDeviceType from "@/hook/useDeviceType";
import { useClipboard, useContact, useCustomCursorContext } from "@/hook";
import { dataContact, infoContact } from "/src/data/dataContact";
import {
  ContainerIcon,
  SocialBtnDesktop,
  SocialBtnMobile,
  RowIcon,
  CopyBtn,
  Tooltip,
  IconCV,
  IconCopy,
  IconEmail,
  IconGithub,
  IconLinkedin,
  IconCVDownload,
} from "@/style";


export const Contact = () => {
  const { handleCursorXs, handleCursorSmall } = useCustomCursorContext();

  const deviceType = useDeviceType();
  const { onActiveIcon, onActiveCopy, openPdf, isActiveIcon, isActiveCopy } =
    useContact();
  const { notSopported, copyError, copied, onClipboard } = useClipboard();
  const onCopy = (copy, index) => {
    onClipboard(copy);
    onActiveCopy(index);
  };

  const iconMapping = {
    [infoContact.MAIL]: <IconEmail size={"calc(2rem + 2vw)"} />,
    [infoContact.LINKEDIN]: <IconLinkedin size={"calc(2rem + 2vw)"} />,
    [infoContact.GITHUB]: <IconGithub size={"calc(2rem + 2vw)"} />,
    [infoContact.DOWNLOAD]: <IconCVDownload size={"calc(2rem + 2vw)"} />,
  };

  return (
    <ContainerIcon>
      {dataContact?.map((item, index) => {
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
              <>{iconMapping[item.icon]}</>
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
