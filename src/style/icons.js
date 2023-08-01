import { UilAt, UilLinkedinAlt, UilFileDownload, UilGithubAlt, UilExternalLinkAlt, UilHtml5, UilCss3Simple, UilReact, UilJavaScript } from "@iconscout/react-unicons";
import styled from "styled-components";

const IconStyle = {
 // filter: " drop-shadow(1px 1px 1px #222)",
 filter: " drop-shadow(5px 5px 5px #222)",
 borderRadius: "16px"
};
export const iconSize = `5rem`;

export const IconHtml = styled(UilHtml5)`
${IconStyle}
color:#f24400;
`
export const IconCss = styled(UilCss3Simple)`
${IconStyle}
color:#006cb0;
`
export const IconJavaScript = styled(UilJavaScript)`
${IconStyle}
color:#f1d222;
`
export const IconReact = styled(UilReact)`
${IconStyle}
color:#00d1f0;
`
export const iconSizeLink = "10vw";

export const IconLinkExternal = styled(UilExternalLinkAlt)`
 filter:drop-shadow(1px 1px 1px #333);
    color: #000;
    margin-left: 4px;
    `

export const IconEmail = styled(UilAt)`color:#f1d222;`
export const IconLinkedin = styled(UilLinkedinAlt)`color:#0e76a8;


`
export const IconGithub = styled(UilGithubAlt)`

color:#333;`
export const IconCV = styled(UilFileDownload)`

color:#24aa24;`