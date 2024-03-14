import styled from "styled-components";
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
justify-content: ${(props) => (props.header && "center")};
align-items: ${(props) => (props.header && "center")};
font-weight: ${(props) => (props.header && "bold")};
justify-self: ${(props) => (props.header ? "center" : "start")};
align-self: ${(props) => (props.header ? "center" : "start")};
gap: 6px;
p {
    font-size: ${(props) => (props.header ? "1.9rem" : "1.2rem")};
  }
img{
height: 2rem;
object-fit: contain;
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
export const ImgProyect = styled.img`
  z-index: 800;
  position: ${(props) => (props.isDesktop ? "absolute" : "relative")};
  top: ${(props) => (props.isDesktop ? "0%" : "")};
  left: ${(props) => (props.isDesktop ? "50%" : "")};
  transform: ${(props) => (props.isDesktop ? "translate(-50%, -50%)" : " ")};
  border-radius: 10px;
  box-shadow: 1px 2px 3px black;
  object-fit: cover;
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
    filter: grayscale(1);
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
  transition: all 500ms;

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
      filter:  grayscale(0);
    }
    ${ImgProyect} {
      scale: ${(props) => (props.isDesktop ? "1" : "0.8")};
      rotate: ${(props) => (props.isDesktop ? "12.5deg" : "0deg")};
      transform: translateX(${(props) => (props.isDesktop ? "0" : "-25px")});
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
