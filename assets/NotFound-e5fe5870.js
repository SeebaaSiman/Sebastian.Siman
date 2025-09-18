import{b as m,r,g as f,u as g,f as v,a as x,j as t,d}from"./index-a383438f.js";import{B as h}from"./BtnGlass-e0098144.js";import"./buttons-415a0563.js";import"./animations-d7bb6466.js";const j=()=>{const{texts:n}=m(),e=r.useRef(),o=f(),{handleCursorXs:u}=g(),l=v();r.useEffect(()=>{u()},[]),r.useEffect(()=>{const s=a=>{if(!e.current||!o==="desktop")return;const i=a.clientX,c=a.clientY;e.current&&(e.current.style.maskImage=`radial-gradient(circle 100px at ${i}px ${c}px, transparent 0 80px, rgba(0,0,0,0.85) 120px)`,e.current.style.webkitMaskImage=`radial-gradient(circle 100px at ${i}px ${c}px, transparent 0 80px, rgba(0,0,0,0.85) 120px)`)};return window.addEventListener("mousemove",s),()=>window.removeEventListener("mousemove",s)},[]);const p=()=>{l("/Sebastian.Siman/")};return x(b,{children:[o==="desktop"&&t(k,{ref:e}),t("h1",{children:n.titleError}),t("p",{children:n.subtitleError}),t(h,{fn:p,$notfound:!0,children:n.buttonError})]})},b=d.main`
  padding: 2rem;
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100dvh;
  background-color: #111827;
  color: #e6e4e2;
  cursor: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  h1 {
    font-size: 11vw;
  }
  p {
    font-size: 6vw;
  }
`,k=d.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  pointer-events: none;
  z-index: 2;
  transition: mask-image 0.2s, -webkit-mask-image 0.2s;
`;export{k as NotFoundOverlay,b as NotFoundStyle,j as default};
