import cv from "@/assets/sebastian siman cv.pdf";

export const infoContact = {
 MAIL: "MAIL",
 LINKEDIN: "LINKEDIN",
 GITHUB: "GITHUB",
 DOWNLOAD: "DOWNLOAD",
}

export const dataContact = [
 {
  to: "mailto:seebaasiman@gmail.com",
  // icon: <IconEmail size={"calc(2rem + 2vw)"} />,
  icon: infoContact.MAIL,
  text: "seebaasiman@",
  copy: "seebaasiman@gmail.com",
 },
 {
  to: "https://www.linkedin.com/in/sebasti%C3%A1nsiman/",
  // icon: <IconLinkedin size={"calc(2rem + 2vw)"} />,
  icon: infoContact.LINKEDIN,
  text: "sebastiansiman",
  copy: "https://www.linkedin.com/in/sebastiánsiman/",
 },
 {
  to: "https://github.com/SeebaaSiman",
  // icon: <IconGithub size={"calc(2rem + 2vw)"} />,
  icon: infoContact.GITHUB,
  text: "seebaasiman",
  copy: "https://github.com/SeebaaSiman",
 },
 {
  to: cv,
  // icon: <IconCVDownload size={"calc(2rem + 2vw)"} />,
  icon: infoContact.DOWNLOAD,
  text: "Sebastián Siman cv",
  copy: cv,
 },
];