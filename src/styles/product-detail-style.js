import styled from "styled-components";
import { pulse } from "./animations";
import { device } from "./device";

export const ProjectDetailStyle = styled.div`
padding: 1rem 0;
 width: 100%;
overflow-y:auto;
overflow-x: hidden;
height: 90dvh;
display: flex;
flex-direction: column;
gap: 12px;
 @media ${device.tablet} {
padding: 1rem 2rem;
 }
 @media ${device.laptop} {
padding: 1rem 4.5rem;
 }
 @media ${device.laptopL} {
padding: 1rem 5rem;
 }
 @media ${device.desktop} {
padding: 1rem 6.5rem;
 }

`
export const ProjectDetailTitle = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 1rem;
img{
  width: 45px;
 @media ${device.tablet} {
  width: 50px;
 }
}
`
export const TechUsedStyle = styled.div`
  font-weight: 800;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
  h3{
    text-decoration: underline;
  }
  p {
  }
  div{
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    gap:4px;
  }
  span {
display: flex;
justify-content: start;
align-items: center;
}
`
export const BrowserStyle = styled.div`
font-family: "Zodiak", sans-serif;
margin:0 auto;
  max-width: 800px;
  position: relative;
  margin-top: 3rem;
  width: 85vw;
  /* min-height: 85vh; */
   color: #666;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 30px;
  /* background-color: #e0e5ec; */
  background: rgb(236, 236, 236);
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 4px, rgba(0, 0, 0, 0.4) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.3) 0px -3px 0px inset;
`
export const BrowserWrapper = styled.div`
  position: relative;
  padding-left: 12px;
  padding-top: 12px;
  width: 100%;
  height: auto;
  background: transparent;
  overflow: hidden;
  display: flex;
  border-bottom: 1px solid #ccc;
`
export const BrowserCircles = styled.div`
 height: 35px;
  display: flex;
  align-items: center;
  width: auto;
  gap: 4px;
  padding: 10px;
  @media (min-width: 500px) {
    gap: 8px;
  }
div {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  box-shadow: inset 2px 2px 5px rgba(235, 235, 235, 0.356);
&:first-child {
  background-color: red;
}
&:nth-child(2) {
  background-color: rgb(204, 167, 4);
}
&:last-child {
  background-color: green;
}
}`
export const BrowserTab = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  width: 80%;
  padding: 5px;
  display: flex;
  gap: 10px;
`
export const BrowserChevrons = styled.div`
  display: none;
  @media (min-width: 500px) {
    display: flex;
  }`
export const BrowserSearchBar = styled.div`
  font-family: "Zodiak", sans-serif;
  position: relative;
  border: 0.5px solid black;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: rgb(88, 88, 88);
  box-shadow: inset 2px 2px 2px #05050525;
  animation: ${pulse} 3s ease-in-out infinite;
  a {
  font-family: "Bebas Neue", sans-serif;
  font-size: 14px;
  appearance: none;
  text-decoration: none;
  color: #222;
  cursor: none;
  @media (min-width: 500px) {
    font-size: 14px;
  }
}
  `
export const BrowserContent = styled.div`
   font-family: "Zodiak", sans-serif;
  position: relative;
  height: 100%;
  width: 100%;
 padding:10px;
  color: #666;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap:12px;
   `
export const SliderStyle = styled.div`
    display: flex;
    flex-direction: column;
  justify-content: center;
  align-items: center;
   width: 100%;
   `
export const SliderContainerMainImg = styled.div`
 width:100%;
position:relative;
display: flex;
align-items: center;
justify-content: center;
padding:8px;
`
export const SliderMainImg = styled.div`
 padding:4px;
width:42vw;
  max-width: 350px;
  aspect-ratio: 4/1;
 img{
  width:100%;
  object-fit: contain;
  border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 4px, rgba(0, 0, 0, 0.4) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.3) 0px -3px 0px inset;
}
 `;

export const SliderThumbs = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  margin-top: 12px;
    transition:${(props) => props.theme.transition};
  img {
    width: 14vw;
    max-width: 100px;
    object-fit: contain;
    border-radius: 10px;
    margin: 0 12px;
      transition:${(props) => props.theme.transition};
    &:hover {
      box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);
        transition:${(props) => props.theme.transition};
    }
  }
`;

export const SliderBtn = styled.button`
  background: #eee;
  border: none;
  font-size: 2rem;
  cursor: none;
  padding: 8px  ;
  border-radius: 50%;
    transition:${(props) => props.theme.transition};
    display:flex;
    justify-content:center;
    align-items:center;
  &:hover {    background: #ccc;
        box-shadow:${(props) => props.theme.cardShadow};
          transition:${(props) => props.theme.transition};
  }
`;
