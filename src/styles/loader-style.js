import styled, { keyframes } from "styled-components";

export const ShowShadow = keyframes`
0%{
transform:scaleX(1.5);
}

40%{
transform:scaleX(1);
 opacity: .7;
 }

 100% {
  transform: scaleX(.2);
  opacity: .4;
 }
`
export const ShowCircle = keyframes`
0%{
top:60px;
height:5px;
border-radius:50px50px25px25px;
transform:scaleX(1.7);
}

40%{
height:20px;
border-radius:50%;
transform:scaleX(1);
}

100%{
top:0%;
}
`
export const LoaderPage = styled.section`
cursor: none;
width:100vw;
height:100dvh;
 background-color: #111827;
  color: #e6e4e2;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const LoaderStyle = styled.aside`
  position: relative;
  width: 200px;
  height: 60px;
  z-index: 1;
`

export const LoaderCircle = styled.div`
  width: 20px;
height: 20px;
position: absolute;
border-radius:50%;
background-color:#fff;
left:15%;
transform-origin:50%;
animation:${ShowCircle}.5s alternate infinite ease;
 &:nth-child(2) {
 left: 45%;
 animation-delay: .2s;
}
&:nth-child(3) {
 left: auto;
 right: 15%;
 animation-delay: .3s;
}
`
export const LoaderShadow = styled.div`
  width: 20px;
height: 4px;
border-radius:50%;
background-color:rgba(0,0,0,0.9);
position:absolute;
top:62px;
transform-origin:50%;
z-index:-1;
left:15%;
filter:blur(1px);
animation:${ShowShadow}.5s alternate infinite ease;
&:nth-child(4){
left:45%;
animation-delay:.2s
}
&:nth-child(5){
left:auto;
right:15%;
animation-delay:.3s;
}

`