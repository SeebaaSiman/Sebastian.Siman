import{d as r,r as u,u as C,f as M,c as m,a as g,j as n,e as T,O as L}from"./index-7fb03883.js";import{d as E}from"./dataProject-a6fc8f7c.js";import"./icon-b74de6e1.js";const S=r.div`
  width: 100%;
  max-width:100vw;
  min-width: 100vw;
  height: 90vh;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-width: 1px;
  font-family: "Zodiak", sans-serif;
  overflow: hidden;
`,w=r.div`
  position: relative;
display: grid;
place-content: center;
width: 100%;
height: 29vh;
background-color: #000;
cursor: none;
  img {
 border-radius:12px;
object-fit:cover;
 height: 28.5vh;
 width: 100%;
}
`,k=r.div`
  display: grid;
 position: absolute;
 border-radius:12px;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 place-content: center;
 background-color: #e6e4e2;
 color: #111827;
`,I="polygon(0 0, 100% 0, 100% 100%, 0 100%)",c="polygon(0 0, 100% 0, 0 0, 0 100%)",h="polygon(0 0, 0 100%, 100% 100%, 0 100%)",j="polygon(100% 100%, 100% 0, 100% 100%, 0 100%)",_="polygon(0 0, 100% 0, 100% 100%, 100% 0)",O={left:c,bottom:c,top:c,right:_},R={left:h,bottom:h,top:h,right:j},B=()=>{const[t,o]=u.useState(c),s=u.useRef(null),a=e=>{const i=s.current.getBoundingClientRect(),l={proximity:Math.abs(i.left-e.clientX),side:"left"},d={proximity:Math.abs(i.right-e.clientX),side:"right"},p={proximity:Math.abs(i.top-e.clientY),side:"top"},v={proximity:Math.abs(i.bottom-e.clientY),side:"bottom"};return[l,d,p,v].sort((y,P)=>y.proximity-P.proximity)[0].side};return{handleMouseLeave:e=>{const i=a(e);o(R[i])},handleMouseEnter:e=>{const i=a(e);o(O[i]),setTimeout(()=>o(I),50)},boxRef:s,clipPath:t}},N=({project:t})=>{const{handleMouseLeave:o,handleMouseEnter:s,boxRef:a,clipPath:b}=B(),{handleCursorNotSize:x,handleCursorSmall:e}=C(),i=M(),{handleScroll:l}=m(),d=p=>{l(50),i(`/Sebastian.Siman/projects/${p.title}`)};return g(w,{onMouseEnter:s,onMouseLeave:o,ref:a,children:[n("img",{src:t.img[0],alt:t.title}),n(k,{onMouseEnter:x,onMouseLeave:e,style:{clipPath:b,transition:"clip-path 0.3s ease"},onClick:()=>d(t),children:n("h2",{children:t.title})})]})},z=()=>{const t=E();return n(S,{children:t.map(o=>n(N,{project:o},o.id))})},H=r.div`
  /* padding: 1rem; */
  display: flex;
  width: 200%; /* Cambia el ancho para la cantidad de contenido */
  scroll-behavior: smooth;
  gap: 2rem;
  transition: all 0.8s ease-in-out;
  background-color: #000;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Capa de superposición oscura */
    pointer-events: none; /* Permitir la interacción a través de la capa */
  }
 `,f=r.div`
  position: relative;
  width: 100vw; /* Cada contenido ocupa el viewport width */
   height: 100%;
  scroll-snap-align: start;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`,F=({children:t})=>{const{scrollPosition:o}=m();return g(H,{style:{transform:`translateX(-${o}%)`},children:[n(f,{children:t[0]}),n(f,{children:t[1]})]})},K=()=>{const t=T().pathname,{handleScroll:o}=m();return u.useEffect(()=>{o(t==="/Sebastian.Siman/projects"?-50:50)},[]),g(F,{children:[n(z,{}),n(L,{})]})};export{K as default};
