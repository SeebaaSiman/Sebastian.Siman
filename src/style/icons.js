import styled, { css } from "styled-components";
import { UilAt, UilLinkedinAlt, UilChatBubbleUser, UilFileDownload, UilGithubAlt, UilCopy, UilHtml5, UilCss3Simple, UilReact, UilJavaScript } from "@iconscout/react-unicons";

const IconStyle = css`
    filter:  drop-shadow(1px 1px 1px ${(props) => props.theme.textColor});
    border-radius: 16px;
    transition: all .5s ease-in-out;
    `

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

//Contact
const IconContact = css`
filter:drop-shadow(1px 1px 1px #333);
    transition: all .5s ease-in-out;
    `
export const IconEmail = styled(UilAt)`
${IconContact};
color:#f1d222;`
export const IconLinkedin = styled(UilLinkedinAlt)`
${IconContact};
color:#0e76a8;
`
export const IconCV = styled(UilChatBubbleUser)`
${IconContact};
color:#24aa24;`
export const IconGithub = styled(UilGithubAlt)`
 ${IconContact};
 color:#333;`
export const IconCVDownload = styled(UilFileDownload)`
 ${IconContact};
 color:#24aa24;`
export const IconCopy = styled(UilCopy)`
 ${IconContact};
 color:#000;`