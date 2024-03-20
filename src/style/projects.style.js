import styled, { keyframes } from "styled-components";
import { UnderlineHover, device, ShakeVertical } from "/src/style";
//* ListProject
export const SectionProject = styled.section`
  height: 100vh;
  width: 100vw;
  padding-top: ${(props) => (props.verticalShow ? "0rem" : "2rem")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Roboto",sans-serif;
`;

//*ProjectInfo
export const ButtonBackProject = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  margin: 6px;
  z-index: 900;
  ${UnderlineHover}
`;
export const InfoContainer = styled.div`
  position: relative;
  font-family: "Roboto", sans-serif;
  background-color: ${(props) => props.theme.bgProjectInfo};
  color: ${(props) => props.theme.textColor};
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2.3rem;
  padding-bottom: 1rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const TextInfo = styled.span`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-self: start;
align-self: start;
gap: 6px;
p {
    font-size: 1.2rem;
  }
img{
height: 2rem;
object-fit: contain;
 }
 `
export const TextHeader = styled(TextInfo)`
justify-content: center;
align-items: center;
font-weight: bold;
justify-self: center;
align-self: center;
p {
    font-size:1.8rem;
  }
`


//*ProjectItem

export const ArrowContainer = styled.div`
   padding: 8px;
  opacity: 0;
  font-size: 2.5rem;
  transform: translateX(25%);
  color: ${(props) => props.theme.textColor};
  transition: all 0.5s ease-in-out;
`;
const ShowImgMoveLoop = keyframes`
0%{transform:translateY(-5%)}
50%{transform:translateY(5%)}
100%{transform:translateY(-5%)}
`
export const ImgProyect = styled.img`

  z-index: 999;
  position: absolute;
  /* top:20%; */
  left:-50%;
 border-radius: 10px;
  box-shadow: 1px 2px 3px black;
  object-fit: contain;
  scale: 0;
  rotate: -12.5deg;
  transition: all 0.5s ease-in-out;
`;
export const Title = styled.span`
  padding: 5px;
  width: 100%;
  max-width: 100%;
  font-weight: bold;
  transform: translateX(0%);
  transition: all 0.5s ease-in-out;
  z-index: 3;

  p {
    display: inline-block;
    position: relative;
    color: ${(props) => props.theme.bgApp};
    text-shadow: -1px -1px 0 ${(props) => props.theme.textShadow},
      1px -1px 0 ${(props) => props.theme.textShadow},
      -1px 1px 0 ${(props) => props.theme.textShadow},
      1px 1px 0 ${(props) => props.theme.textShadow};
  }
  img{
    height: 2.5rem;
    margin-right: 6px;
    object-fit: contain;
    filter: grayscale(1) blur(2px);
    transition: all 0.5s ease-in-out;
  }
`;
export const ItemContainer = styled.span`
  list-style: none;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 2px ${(props) => props.theme.textShadow};
  padding: 8px 4px;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 2rem;
  z-index: 2;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  &:hover {
    border-bottom: solid 3px ${(props) => props.theme.textColor};

    ${Title} {
      max-width: 90%;
      transform: translateX(16px);
    }
    ${Title} p {
      font-size: 2.2rem;
      color: ${(props) => props.theme.textColor};
      text-shadow: -1px -1px 0 transparent, 1px -1px 0 transparent,
        -1px 1px 0 transparent, 1px 1px 0 transparent;
      animation: ${ShakeVertical} 0.8s linear both;
    }
    ${Title} img {
      filter:  grayscale(0)blur(0);
    }
    ${ImgProyect} {
      left:50%;
      scale: 1;
      rotate: 12.5deg;
      animation: ${ShowImgMoveLoop} 3s ease-in-out infinite;
      animation-delay: .3s;
    }
    ${ArrowContainer} {
      opacity: 1;
      transform: translateX(-10%);
    }
  }
  @media ${device.md} {
    padding: 12px 4px;
  }
`;
