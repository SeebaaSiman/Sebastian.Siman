import{d as c,j as e,u as S,r as p,a as o,b as x,F as $,c as N,e as L,f as E,g as D,O as T}from"./index-a383438f.js";import{s as F,a as O,S as H,o as R,B as I,b as Y,l as A,c as P}from"./animations-d7bb6466.js";import{B as g}from"./buttons-415a0563.js";import{B as U}from"./BtnGlass-e0098144.js";const _=c.main`
 position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
   background-color: #111827;
  color: #e6e4e2;
  &.idle-cursor {
  cursor: none;
}
`,X=c.section`
background-color: #000;
  /* background: #e0e5ec; */

height: 100dvh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  scale: 2;
  transition: all 1s ease-in-out;
&.active {
  position: relative;
  scale: 1;
  transition: all 1s ease-in-out;
}
`,W=c.aside`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 51%;
  background-color: #111827;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  z-index: 800;
  transition: all 2.2s cubic-bezier(0.48, 0.89, 0.35, 1);
  &.left {
  left: 0;
  transform: translateX(0%);
  box-shadow: 15px 0 30px rgba(0, 0, 0, 0.5);
}

&.right {
  right: 0;
  transform: translateX(0%);
  box-shadow: -15px 0 30px rgba(0, 0, 0, 0.5);
}

&.left.open {
  transform: translateX(-100%);
}

&.right.open {
  transform: translateX(100%);
}
`,j=c.div`
 display: flex;
 justify-content: ${t=>t.$right?"end":"start"};
 align-items: start;
 width: 100%;
 height: 8vh;
`,C=c.div`
display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  width: 100%;
  height: 55vh;
    img {
    max-width: 80%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 1px 2px 1rem rgba(0, 0, 0, 0.6);
    &:hover{
    box-shadow: 1px 2px 1rem rgba(0, 0, 0, 0.85);

    }
  }
  animation: ${F} 0.6s ease-in-out forwards;
`,B=c.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:${t=>t.$right?"end":"start"};
  gap: 8px;
  width: 100%;
  height: 8vh;
  p{
    font-family: "Boska", sans-serif;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.85);
  }
  hr {
    width: 70%;
    height: 1px;
    border-radius: 30%;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.8);
  }
  div {
    display: flex;
    gap: 22px;
    align-items: center;
  }
`,y=({direction:t,isOpen:n,children:s,handleTransitionEnd:i})=>e(W,{className:`${t} ${n?"open":""}`,onTransitionEnd:i,children:s}),G=()=>{const{handleCursorXs:t,handleCursorSmall:n}=S(),[s,i]=p.useState(!1),a=p.useRef(null),[d,u]=p.useState({width:0,height:0});return p.useEffect(()=>{const r=()=>{if(a.current){const{width:f,height:m}=a.current.getBoundingClientRect();u({width:f,height:m})}};return r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]),p.useEffect(()=>{const r=()=>{if(a.current){const{height:f}=a.current.getBoundingClientRect();let m=a.current.children.length*40;u({width:m,height:f})}};return r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]),{mouseEnter:()=>{i(!0),t()},mouseLeave:()=>{i(!1),n()},dimensions:d,textLayerRef:a,hovered:s}},M=({children:t,fn:n})=>{const{mouseEnter:s,mouseLeave:i,dimensions:a,textLayerRef:d,hovered:u}=G();return o(K,{onClick:n,$right:!0,onMouseEnter:s,onMouseLeave:i,style:{width:`${a.width}px`,height:`${a.height}px`},children:[e("div",{ref:d,className:` ${u?"hovered":""}`,children:t.split("").map((h,l)=>e("span",{className:"  letter-front",style:{transitionDelay:`${l*50}ms`},children:h},`letter-front-${l}`))}),e("div",{className:` ${u?"hovered":""}`,children:t.split("").map((h,l)=>e("span",{className:"letter-back",style:{transitionDelay:`${l*50}ms`},children:h},`letter-back-${l}`))})]})},K=c.button`
  font-family: "Bebas Neue", sans-serif;
  display: inline-block;
  position: relative;
  overflow: hidden;
  font-size: 1.5rem;
  /* font-weight: bold; */
  text-transform: uppercase;
  line-height: 0.75;
  text-decoration: none;
  color: white;
  border: none;
  background: none;
  cursor: none;
  animation: ${O} 0.6s ease-in-out forwards;
  @media (min-width: 500px) {
    font-size: 3rem;
  }
  div {
    margin-top: 2px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    transform: translateY(0);
    transition: transform 0.25s ease-in-out;

    &.hovered {
      span.letter-back {
        transform: translateY(0);
      }
      span.letter-front {
        transform: translateY(-100%);
      }
    }
  }
  span {
    display: inline-block;
    transition: transform 0.25s ease-in-out;
    &.letter-back {
      transform: translateY(100%);
    }
    &.letter-front {
      transform: translateY(0);
      color: transparent; /* Hace el texto invisible */
      -webkit-text-stroke: 1px white; /* Define el contorno del texto */
      text-stroke: 1px white; /* Soporte adicional para navegadores */
    }
  }
`,V=c.div`
  font-family: "Zodiak", sans-serif;
  animation: ${H} 0.6s ease-in-out;
  h1 {
    font-family: "Boska", sans-serif;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.85);

  }
  p {
    font-size: 14px;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.85);

  }
`,Z=c.div`
 display: flex;
  align-items: center;
  justify-content: start;
  gap: 8px;
  p {
    color: grey;
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.85);
  }
  span{
    display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 10px;
  height: 10px;
  border: solid 2px rgb(255, 207, 64);
  border-radius: 50%;
  /* margin: 0 10px; */
  background-color: rgb(255, 207, 64);
  }
  div{  position: absolute;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  animation: ${R} 2s ease-in-out infinite;}
`,q=({text1:t,text2:n})=>o(V,{children:[e("h1",{children:"Sebastián Siman"}),e("p",{children:t}),o(Z,{children:[e("span",{children:e("div",{})}),e("p",{children:n})]})]}),J=t=>{const[n,s]=p.useState(""),[i,a]=p.useState(!1),[d,u]=p.useState(0),h=[t,"Front-end"],l=2e3,[r,f]=p.useState(200-Math.random()*100);p.useEffect(()=>{let b=setInterval(()=>{m()},r);return()=>clearInterval(b)},[n,r]);const m=()=>{let b=d%h.length,v=h[b],w=i?v.substring(0,n.length-1):v.substring(0,n.length+1);s(w),i&&f(z=>z/2),!i&&w===v?(a(!0),f(l)):i&&w===""&&(a(!1),u(d+1),f(500))};return{text:n}},Q=c.div`
display: inline-block;
  width: 100%;
  font-family: "Boska", sans-serif;
  font-size: 24px;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.85);


  @media (min-width: 600px) {
    width: 80%;
  }
  @media (min-width: 800px) {
    width: 50%;
    font-size: 28px;
  }
  span{
   border-right: 2px solid #fff;
  padding-right: 5px;
  animation: ${I} 1.3s step-end infinite;
  }
`;function ee({developer:t}){const{text:n}=J(t);return e(Q,{children:e("span",{children:n})})}const te=({handleCursorXs:t,handleCursorSmall:n,handleNavigation:s})=>{const{texts:i}=x();return o($,{children:[e(j,{children:e(q,{text1:i.freelance,text2:i.freelanceLimit})}),e(C,{children:e(ee,{developer:i.developer})}),e(M,{fn:()=>s("about"),children:i.buttonAbout}),o(B,{children:[e("p",{children:"Información "}),e("hr",{}),o("div",{children:[e(g,{onMouseEnter:t,onMouseLeave:n,onClick:()=>s("certificates"),target:"_blank",rel:"noopener noreferrer",children:"certificados"}),e(g,{onMouseEnter:t,onMouseLeave:n,onClick:()=>s("CV"),target:"_blank",rel:"noopener noreferrer",children:"cv"})]})]})]})},ne="/Sebastian.Siman/assets/perfil-e1344a20.jpg",ie="/Sebastian.Siman/assets/eeuu-06202a7e.png",se="/Sebastian.Siman/assets/spain-a63b68be.png",ae=c.ul`
  font-family: "Bebas Neue", sans-serif;
  width: 100px;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  font-size: 1.2rem;
  list-style: none;
  position: relative;
  overflow: hidden;
  animation: ${Y} 0.6s ease-in-out;`,k=c.li`
   position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100px;
  height: 35px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
      text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.85);

  img{
    width: 2rem;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
  }

  &.hidden {
  pointer-events: none;
  animation: ${A} 0.5s ease-in-out forwards;
}

&.visible {
  pointer-events: auto;
  animation: ${P} 0.5s ease-in-out forwards;
}
  `,oe=()=>{const{setLanguage:t,language:n,texts:s}=x(),{handleCursorXs:i,handleCursorSmall:a}=S();return o(ae,{children:[o(k,{className:`  ${n==="es"?"visible":"hidden"}`,onMouseEnter:i,onMouseLeave:a,onClick:()=>t("en"),"aria-label":"Switch to English",children:[e("img",{src:ie,alt:"eeuu flag",loading:"lazy"}),s.english]}),o(k,{className:`  ${n==="en"?"visible":"hidden"}`,onMouseEnter:i,onMouseLeave:a,onClick:()=>t("es"),"aria-label":"Cambiar a español",children:[e("img",{src:se,alt:"spain flag",loading:"lazy"}),s.spain]})]})},re=({handleCursorXs:t,handleCursorSmall:n,handleNavigation:s})=>{const{texts:i}=x();return o($,{children:[e(j,{$right:!0,children:e(oe,{})}),e(C,{$right:!0,children:e("img",{src:ne,alt:"perfil image"})}),e(M,{$right:!0,fn:()=>s("projects"),children:i.buttonProject}),o(B,{$right:!0,children:[e("p",{children:"Contacto"}),e("hr",{}),o("div",{children:[e(g,{onMouseEnter:t,onMouseLeave:n,href:"mailto:seebaasiman@gmail.com",target:"_blank",rel:"noopener noreferrer",children:"Email"}),e(g,{onMouseEnter:t,onMouseLeave:n,href:"https://www.linkedin.com/in/sebasti%C3%A1nsiman/",target:"_blank",rel:"noopener noreferrer",children:"linkedin"}),e(g,{onMouseEnter:t,onMouseLeave:n,href:"https://github.com/SeebaaSiman",target:"_blank",rel:"noopener noreferrer",children:"github"})]})]})]})},le=()=>{const[t,n]=p.useState(!1),{handleScroll:s}=N(),{texts:i}=x(),a=L().pathname,d=E();p.useEffect(()=>{n(a!=="/Sebastian.Siman/")},[]);const u=()=>{t||n(!0)},h=()=>{if(a.startsWith("/Sebastian.Siman/projects/")){s(-50),d("/Sebastian.Siman/projects");return}t&&n(!1)},l=()=>{!t&&a!=="/Sebastian.Siman/"&&d("/Sebastian.Siman/")},f=a.startsWith("/Sebastian.Siman/projects/")&&a.length>26?i.buttonBack:i.buttonHome;return{isAnimating:t,handleSectionClick:u,handleBack:h,handleTransitionEnd:l,textButton:f}},ce=({handleBack:t,textButton:n})=>{const s=L().pathname;return o(de,{children:[e(U,{fn:t,children:n}),e("p",{children:s})]})},de=c.div`
  width: 100%;
  height: 10vh;
  font-family: "Bebas Neue", sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  /* background-color: blue; */
`,me=()=>{const t=D(),n=E(),{isAnimating:s,handleSectionClick:i,handleBack:a,handleTransitionEnd:d,textButton:u}=le(),{handleCursorXs:h,handleCursorSmall:l}=S(),r=f=>{i(),n(f)};return o(_,{className:` ${t==="desktop"&&"idle-cursor"}`,children:[e(y,{direction:"left",isOpen:s,handleTransitionEnd:d,children:e(te,{handleCursorXs:h,handleCursorSmall:l,handleNavigation:r})}),e(y,{direction:"right",isOpen:s,handleTransitionEnd:d,children:e(re,{handleCursorXs:h,handleCursorSmall:l,handleNavigation:r})}),o(X,{className:`${s?"active":""}`,children:[e(ce,{handleBack:a,textButton:u}),e(T,{})]})]})};export{me as default};
