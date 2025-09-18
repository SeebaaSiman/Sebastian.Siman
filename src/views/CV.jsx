import styled from "styled-components";
import { device } from "../styles/device";
import { BtnGlass } from "../components/BtnGlass";
import pdfFile from "../assets/Sebastian_Siman.pdf";

const CV = () => {
  return (
    <CVStyle>
      <BtnGlass ahref={pdfFile} $right download rel='noreferrer' target='_blank'>
        Descargar CV
      </BtnGlass>
      <iframe src={pdfFile} title='CV_Sebastian_Siman PDF' />
    </CVStyle>
  );
};

export default CV;
const CVStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 100vw;
  height: 100dvh;
  transition: ${(props) => props.theme.transition};
  iframe {
    border-radius: 8px;
    border: none;
    margin: 0 10px;
    width: 95%;
    height: calc(100dvh - 70px);
    box-shadow: ${(props) => props.theme.cardShadow};
    transition: ${(props) => props.theme.transition};
    @media ${device.tablet} {
      width: 80%;
    }
  }
`;
