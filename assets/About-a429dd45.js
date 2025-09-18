import{r,d as S,R as y,j as t,u as E,a as C,b as T}from"./index-a383438f.js";import{a as x}from"./buttons-415a0563.js";import"./animations-d7bb6466.js";const A="/Sebastian.Siman/assets/setup-2da05b5f.jpg",R="/Sebastian.Siman/assets/ginasia-81291609.jpg",k="/Sebastian.Siman/assets/code-ba3b1c8b.jpg",I=()=>{const[n,m]=r.useState(0),s=r.useRef(n),d=r.useRef(null),l=r.useRef(null),o=window.innerHeight,a=3,c=r.useCallback(e=>{s.current!==e&&(s.current=e,m(e)),u()},[]);r.useEffect(()=>{s.current=n},[n]);const u=r.useCallback(()=>{l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{const e=Math.round(s.current/o),i=e*o;if(Math.abs(s.current-i)>o*.5){const g=s.current>i?e+1:e,M=Math.min(g*o,(a-1)*o);c(M)}else c(i)},4e3)},[o,a,c]);r.useEffect(()=>(u(),()=>{l.current&&clearTimeout(l.current)}),[n,u]),r.useEffect(()=>{const e=d.current;let i=!1;const v=g=>{g.preventDefault(),i||(window.requestAnimationFrame(()=>{c(Math.max(0,Math.min(s.current+g.deltaY,(a-1)*o))),i=!1}),i=!0)};return e&&e.addEventListener("wheel",v,{passive:!1}),()=>{e&&e.removeEventListener("wheel",v)}},[c,a,o]),r.useEffect(()=>{const e=i=>{i.key==="ArrowDown"&&f(),i.key==="ArrowUp"&&h()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)});const w=(e=>Math.round(e/o))(s.current),h=()=>{const e=Math.max(w-1,0);c(e*o)},f=()=>{const e=Math.min(w+1,a-1);c(e*o)};return{containerRef:d,scrollY:n,handleArrowUp:h,handleArrowDown:f,SECTION_HEIGHT:o,TOTAL_SECTIONS:a}},Y=S.div`
position: relative;
  width: 100vw;
  height: 90dvh;
  overflow: hidden;
  touch-action: none;
  display: flex;  will-change: transform;

  `,b=S.div`
  will-change: transform;
 width: 50vw;
  height: 300dvh; /* Tres secciones de 100vh */
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s ease-out;
`,j=S.div`
  width: 100%;
  height: 100vh; /* Cada sección ocupa el 100vh */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  background: #e0e5ec;
  will-change: transform;

  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
   }
  p {
    width: 98%;
    height: 100vh;
    padding: 4px;
    display: flex;
    place-items: center;
    font-size: 1.3rem;
    color: black;
    font-family: "Zodiak", sans-serif;
    &:first-letter {
      font-weight: bold;
    }
  }
`,L=y.memo(({children:n})=>t(j,{children:n})),O=({arrLeft:n,arrRight:m})=>{const{containerRef:s,scrollY:d,handleArrowUp:l,handleArrowDown:o,SECTION_HEIGHT:a,TOTAL_SECTIONS:c}=I(),{handleCursorXs:u,handleCursorSmall:p}=E(),w=Math.round(d/a);return C(Y,{ref:s,children:[w>0&&t(x,{onClick:l,onMouseEnter:u,onMouseLeave:p,style:{top:"3%"},children:t("svg",{width:"25px",height:"25px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L18.7071 10.2929C19.0976 10.6834 19.0976 11.3166 18.7071 11.7071C18.3166 12.0976 17.6834 12.0976 17.2929 11.7071L13 7.41421V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V7.41421L6.70711 11.7071C6.31658 12.0976 5.68342 12.0976 5.29289 11.7071C4.90237 11.3166 4.90237 10.6834 5.29289 10.2929L11.2929 4.29289Z",fill:"#0F1729"})})}),w<c-1&&t(x,{onMouseEnter:u,onMouseLeave:p,onClick:o,style:{bottom:"-2%"},children:t("svg",{width:"25px",height:"25px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 4C12.5523 4 13 4.44772 13 5V16.5858L17.2929 12.2929C17.6834 11.9024 18.3166 11.9024 18.7071 12.2929C19.0976 12.6834 19.0976 13.3166 18.7071 13.7071L12.7071 19.7071C12.5196 19.8946 12.2652 20 12 20C11.7348 20 11.4804 19.8946 11.2929 19.7071L5.29289 13.7071C4.90237 13.3166 4.90237 12.6834 5.29289 12.2929C5.68342 11.9024 6.31658 11.9024 6.70711 12.2929L11 16.5858V5C11 4.44772 11.4477 4 12 4Z",fill:"#0F1729"})})}),t(b,{onMouseLeave:p,style:{transform:`translateY(-${d}px)`},children:n.map((h,f)=>t(L,{children:h},f))}),t(b,{onMouseLeave:p,style:{transform:`translateY(calc(${d}px - 200vh))`},children:m.map((h,f)=>t(L,{children:h},f))})]})},N=()=>{const{texts:n}=T(),m=r.useMemo(()=>[C("p",{children:[" ",n.speech1]}),t("img",{src:k,alt:"code",loading:"lazy"}),t("p",{children:n.speech2})],[n]),s=r.useMemo(()=>[t("img",{src:R,alt:"grass",loading:"lazy"}),C("p",{children:[" ",n.speech3]}),t("img",{src:A,alt:"setup",loading:"lazy"})],[n]);return t(O,{arrLeft:m,arrRight:s})};export{N as default};
