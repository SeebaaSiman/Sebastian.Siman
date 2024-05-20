import{r as p,x,_ as Y,u as R,o as L,j as s,b as N,a as C,$ as Z,a0 as ee,a1 as te,F as E,a2 as V,a3 as se,a4 as ne,a5 as oe,a6 as ae,a7 as ce,a8 as ie,a9 as re,aa as le,ab as ue,ac as W,B as pe,E as de,J as he,ad as q}from"./index-2235f59c.js";const me=(e,a,t,o,c)=>{var B,U,F,z,O;const[n,l]=p.useState(0),[m,i]=p.useState(0),[h,d]=p.useState(!1),[u,j]=p.useState(0),f=p.useRef(null),S=p.useRef(null),D=`${t==null?void 0:t.length}00vw`,v=((U=(B=S==null?void 0:S.current)==null?void 0:B.children)==null?void 0:U.length)>0&&((F=S==null?void 0:S.current)==null?void 0:F.offsetWidth)/((O=(z=S==null?void 0:S.current)==null?void 0:z.children)==null?void 0:O.length);p.useEffect(()=>{l(0)},[t]);const M=p.useCallback(g=>{g<0?g=0:g>=(t==null?void 0:t.length)&&(g=(t==null?void 0:t.length)-1),l(g)},[t]);p.useEffect(()=>(e&&(f.current=setInterval(()=>{M(g=>(g+1)%(t==null?void 0:t.length))},a)),()=>{f.current&&clearInterval(f.current)}),[e,t,a,M]);const w=()=>{e&&f.current&&clearInterval(f.current)},I=()=>{e&&(f.current=setInterval(()=>{M(g=>(g+1)%(t==null?void 0:t.length))},a))},$=()=>{w()},k=()=>{I()},P=g=>{c&&(i(g.clientX),d(!0))},T=g=>{if(!c||!h)return;const X=g.clientX-m;j(X)},b=()=>{c&&h&&(d(!1),Math.abs(u)>v*o&&(u>0?M(n-1):M(n+1)),j(0))};return{InnerRef:S,InnerWidth:D,handleMouseEnter:$,handleMouseLeave:k,tamañoSlide:v,activeIndex:n,updateIndex:M,setActiveIndex:l,handleTouchEnd:()=>{I(),!(!c||!h)&&(d(!1),u>v*o?M(n-1):u<-v*o&&M(n+1),j(0))},handleTouchMove:g=>{if(!c||!h)return;const X=g.touches[0].clientX-m;j(X)},handleTouchStart:g=>{if(w(),c)i(g.touches[0].clientX),d(!0);else return},onMouseLeaveAndMouseUp:()=>{k(),b()},handleMouseMove:T,handleMouseDown:P,handleMouseUp:b,deltaX:u,isDragging:h}},ht=()=>{const[e,a]=p.useState(!1),[t,o]=p.useState(!1),[c,n]=p.useState(!1);return{notSopported:t,copyError:c,copied:e,onClipboard:async m=>{try{return navigator!=null&&navigator.clipboard?(await navigator.clipboard.writeText(m),a(!0),setTimeout(()=>{a(!1)},1500),!0):(o("Clipboard not supported"),!1)}catch(i){return n("Error copying to clipboard:",i),setTimeout(()=>{n(!1)},1500),!1}}}},A="/Sebastian.Siman/assets/sebastian siman cv-401d629f.pdf",mt=e=>{const[a,t]=p.useState(new Array(e==null?void 0:e.length).fill(!1)),[o,c]=p.useState(new Array(e==null?void 0:e.length).fill(!1)),n=i=>{t(h=>{const d=[...h];for(let u=0;u<d.length;u++)u!==i&&(d[u]=!1);return d[i]=!d[i],setTimeout(()=>{n(!1)},5e3),d})};return{onActiveCopy:i=>{c(h=>{const d=[...h];for(let u=0;u<d.length;u++)u!==i&&(d[u]=!1);return d[i]=!d[i],d})},onActiveIcon:n,openPdf:()=>{const i=A;window.open(i,"_blank")},isActiveIcon:a,isActiveCopy:o}},ge=e=>{const[a,t]=p.useState(null),o=()=>{var n,l;const c=(l=(n=e==null?void 0:e.current)==null?void 0:n.getBoundingClientRect())==null?void 0:l.height;t(c)};return p.useEffect(()=>(o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}),[]),{containerHeight:a}},H={MAIL:"MAIL",LINKEDIN:"LINKEDIN",GITHUB:"GITHUB",DOWNLOAD:"DOWNLOAD"},gt=[{to:"mailto:seebaasiman@gmail.com",icon:H.MAIL,text:"seebaasiman@",copy:"seebaasiman@gmail.com"},{to:"https://www.linkedin.com/in/sebasti%C3%A1nsiman/",icon:H.LINKEDIN,text:"sebastiansiman",copy:"https://www.linkedin.com/in/sebastiánsiman/"},{to:"https://github.com/SeebaaSiman",icon:H.GITHUB,text:"seebaasiman",copy:"https://github.com/SeebaaSiman"},{to:A,icon:H.DOWNLOAD,text:"Sebastián Siman cv",copy:A}],St=({onClose:e,modalClass:a})=>{const{handleCursorXs:t,handleCursorSmall:o}=R(),{texts:c}=L(),n=`${c.buttonModal}`;return s(Se,{className:a,variantt:a,onClick:e,onMouseEnter:t,onMouseLeave:o,children:n})},Se=x.p`
  position: absolute;
  left: 0;
  top: 0;
  margin: 6px;
  z-index: 900;

  /* border: none;
  text-decoration: none;
  background-color: transparent; */

  ${Y}
`,G=({setVerticalShow:e,verticalShow:a,handleCursorXs:t,handleCursorSmall:o})=>{const{texts:c}=L(),n=N();return s(be,{style:{justifyContent:n==="desktop"?"center":"end"},children:s(y,{onMouseEnter:n==="desktop"?t:null,onMouseLeave:n==="desktop"?o:null,onClick:()=>{e(!a),o()},children:a?c.buttonVerticalTop:c.buttonVerticalMore})})},be=x.div`
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 10px;
  overflow: hidden;
`,y=x.button`
  color: ${e=>e.theme.textShadow};
  text-shadow: 1px 1px 1px transparent;
  background-color: #ccd0cf;
  width: max-content;
  opacity: 1;
  align-items: center;
  padding: 6px 16px;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Oxygen", sans-serif;
  font-weight: 600;
  font-size: 18px;
  border-radius: 100px;
  z-index: 800;
  border: 0 transparent;

  &:hover,
  &:focus {
    background-color: ${e=>e.theme.textShadow};
    text-shadow: 1px 1px 1px #001524;
    color: ${e=>e.theme.textColor};
    border: dashed 1px ${e=>e.theme.textColor};
    outline: 0.1em solid transparent;
    outline-offset: 0.2em;
    border: 1px transparent;
    transition: 0.8s ease-in-out;
  }
`,Ce=({array:e,controls:a=!1,autoplay:t=!0,velocidad:o="500",intervalo:c="5000",swipe:n=!0,sensitivity:l=.5})=>{const{InnerRef:m,InnerWidth:i,handleMouseEnter:h,tamañoSlide:d,activeIndex:u,updateIndex:j,setActiveIndex:f,handleTouchEnd:S,handleTouchMove:D,handleTouchStart:v,onMouseLeaveAndMouseUp:M,handleMouseUp:w,handleMouseMove:I,handleMouseDown:$,deltaX:k,isDragging:P}=me(t,c,e,l,n);return C(Z,{children:[s(ee,{ref:m,style:{width:i,transform:`translateX(-${d*u-k}px)`,transition:P?"none":`${o}ms ease-out all`},onMouseEnter:h,onTouchStart:v,onTouchMove:D,onTouchEnd:S,onMouseDown:$,onMouseMove:I,onMouseUp:w,onMouseLeave:M,children:e==null?void 0:e.map((T,b)=>s(te,{children:s("img",{src:T,alt:`image-slider-${b}`,style:{transition:`${o}ms ease-out all`},className:` ${b===u?"active":""}`})},b))}),a&&C(E,{children:[s(V,{onClick:()=>j(u-1),style:{opacity:u===0?0:1},children:"Prev"}),s(V,{derecho:!0,onClick:()=>j(u+1),style:{opacity:u===(e==null?void 0:e.length)-1?0:1},children:"Next"})]}),(e==null?void 0:e.length)>1&&s(se,{children:e==null?void 0:e.map((T,b)=>s("img",{src:T,alt:`image-slider-${b}`,onClick:()=>f(b),className:` ${b===u?"active":""}`,style:{transition:`${o-100}ms ease-out all`}},b))})]})},K=e=>{var n,l,m;const a=N(),t=p.useRef(null),{containerHeight:o}=ge(t),c=()=>{e.toggleSectionsHorizontal(),e.setInfoActive(e.project),e.handleCursorSmall()};return C(ne,{ref:t,children:[C(oe,{children:[s("img",{src:e.project.icon}),(l=(n=e.project)==null?void 0:n.title)==null?void 0:l.split("").map((i,h)=>s(p.Fragment,{children:i!==" "?s("p",{style:{animationDelay:`${h*.1}s`},children:i}):" "},h))]}),s(ae,{src:e.project.img[0],alt:`Image representing a link for ${(m=e.project)==null?void 0:m.title}`,style:{height:`${o+10}px`}}),s(ce,{onMouseEnter:a==="desktop"?e.handleCursorXs:null,onMouseLeave:a==="desktop"?e.handleCursorSmall:null,onClick:c,children:"➜"})]})},fe=({listArray:e,setVerticalShow:a,verticalShow:t,setInfoActive:o,toggleSectionsHorizontal:c})=>{const{handleCursorXs:n,handleCursorSmall:l}=R();return s(ie,{verticalShow:t,children:t?C(E,{children:[s(G,{handleCursorXs:n,handleCursorSmall:l,setVerticalShow:a,verticalShow:t}),e==null?void 0:e.map((m,i)=>s(K,{project:m,setInfoActive:o,toggleSectionsHorizontal:c,handleCursorXs:n,handleCursorSmall:l},i))]}):C(E,{children:[e==null?void 0:e.map((m,i)=>s(K,{project:m,setInfoActive:o,toggleSectionsHorizontal:c,handleCursorXs:n,handleCursorSmall:l},i)),s(G,{handleCursorXs:n,handleCursorSmall:l,setVerticalShow:a,verticalShow:t})]})})},r={HTML:"HTML",CSS:"CSS",REACT:"REACT"},Me=({toggleSectionsHorizontal:e,setInfoActive:a,infoActive:t})=>{var h,d,u;const{handleCursorXs:o,handleCursorSmall:c}=R(),{texts:n}=L(),l=N(),m=()=>{a(null),e(),c()},i={[r.HTML]:s(pe,{}),[r.CSS]:s(de,{}),[r.REACT]:s(he,{})};return C(re,{children:[s(le,{onMouseEnter:l==="desktop"?o:null,onMouseLeave:l==="desktop"?c:null,onClick:m,children:n.buttonProjectInfo}),C(ue,{children:[s("img",{src:t==null?void 0:t.icon}),s("p",{children:t==null?void 0:t.title})]}),s(Ce,{array:t==null?void 0:t.img}),C(W,{children:[s("p",{children:"Tech:"}),(d=(h=t==null?void 0:t.tech)==null?void 0:h.icon)==null?void 0:d.map((j,f)=>s(p.Fragment,{children:i[j]},f))]}),s(W,{children:(u=t==null?void 0:t.tech)==null?void 0:u.text}),s("a",{href:t==null?void 0:t.url,target:"_blank",children:s(y,{onMouseEnter:l==="desktop"?o:null,onMouseLeave:l==="desktop"?c:null,children:n.go})})]})},_=({setVerticalShow:e,verticalShow:a,listArray:t})=>{const[o,c]=p.useState(!1),[n,l]=p.useState(!1),[m,i]=p.useState(null),h=()=>{c(!o),l(!0)};return C(E,{children:[s(ve,{isOpen:o,className:`${n?"animation":""}`,children:s(fe,{listArray:t,setVerticalShow:e,verticalShow:a,setInfoActive:i,toggleSectionsHorizontal:h})}),s(Te,{isOpen:o,className:`${n?"animation":""}`,children:s(Me,{toggleSectionsHorizontal:h,setInfoActive:i,infoActive:m})})]})},je=q`
  from {
   width: 0;
  opacity: 0;
  }
  to {
   opacity: 1;
    width: 100vw;
  }
`,xe=q`
  from {
   opacity: 1;
    width: 100vw;
    transform: translateX(0);

  }
  to {
   transform: translateX(-100%);
   width: 0;
  opacity: 0;
  }
`,ve=x.div`
  background-color: ${e=>e.theme.bgApp};
  width: 100vw;
  height: 100vh;
`,Te=x.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 0;
  z-index: 800;
  transform: translateX(0);
  opacity: 0;

  &.animation {
    animation: ${({isOpen:e})=>e?je:xe} 0.5s ease-in-out
      forwards;
    transition: all 0.5s ease-in-out;
  }
`,we="/Sebastian.Siman/assets/calculator-8d6ec977.jpg",Ie="/Sebastian.Siman/assets/f1-add78b50.jpg",ke="/Sebastian.Siman/assets/f12-ca0ff209.jpg",He="/Sebastian.Siman/assets/f13-7bc41cb0.jpg",Ee="/Sebastian.Siman/assets/f14-f7bfa3d9.jpg",Le="/Sebastian.Siman/assets/expenses-71906af8.jpg",De="/Sebastian.Siman/assets/HeroesApp-d525c6f4.jpg",$e="/Sebastian.Siman/assets/HeroesApp2-49512544.jpg",Pe="/Sebastian.Siman/assets/HeroesApp3-ea732e20.jpg",Xe="/Sebastian.Siman/assets/HeroesApp4-492ca3b6.jpg",Ae="/Sebastian.Siman/assets/HeroesApp5-959d4c0b.jpg",Re="/Sebastian.Siman/assets/celestial-chronicle-5b5f5e3a.jpg",Ne="/Sebastian.Siman/assets/celestial-chronicle2-610a16a7.jpg",Be="/Sebastian.Siman/assets/celestial-chronicle3-470d7f86.jpg",Ue="/Sebastian.Siman/assets/celestial-chronicle4-950a9865.jpg",Fe="/Sebastian.Siman/assets/celestial-chronicle5-08db4576.jpg",ze="/Sebastian.Siman/assets/Chat-non-contact-whatsapp-943599fd.jpg",Oe="/Sebastian.Siman/assets/journal-5e1e3189.jpg",Ve="/Sebastian.Siman/assets/journal2-e512aacc.jpg",We="/Sebastian.Siman/assets/journal3-9b2b7dda.jpg",Ge="/Sebastian.Siman/assets/screen-386e75b9.png",Ke="/Sebastian.Siman/assets/screen2-a749746a.png",_e="/Sebastian.Siman/assets/screen3-abaee36d.png",qe="/Sebastian.Siman/assets/screen4-df9ed831.png",ye="/Sebastian.Siman/assets/screen5-89c32624.png",Je="/Sebastian.Siman/assets/celestial-283d0b0b.png",Qe="/Sebastian.Siman/assets/calculator-9510e633.ico",Ye="/Sebastian.Siman/assets/expenses-b2520d39.png",Ze="/Sebastian.Siman/assets/f1-5ee663c2.png",et="/Sebastian.Siman/assets/journal-be11a546.png",tt="/Sebastian.Siman/assets/nonchat-f64d68aa.png",st="/Sebastian.Siman/assets/heroes-d63594a8.png",nt="/Sebastian.Siman/assets/cassette-7f2c1dec.svg",ot=()=>{const{texts:e}=L();return[{img:[Ge,Ke,_e,qe,ye],title:"Screen capture X",description:"",icon:nt,tech:{icon:[r.HTML,r.CSS,r.REACT],text:"navigator.mediaDevices.getDisplayMedia, MediaRecorder and Blob"},url:"https://screen-capture-x.vercel.app/"},{img:[Re,Ne,Be,Ue,Fe],icon:Je,title:"celestial chronicle",description:"",tech:{icon:[r.HTML,r.CSS,r.REACT],text:"intersection-observer, react-router-dom, styled-components, customHooks: useCardPlanet, useCountDownTimer, useFetch, useLocalStorage"},url:"https://celestial-chronicle.vercel.app/"},{img:[ze],title:"chat non contact whatsapp",description:"",icon:tt,tech:{icon:[r.HTML,r.CSS,r.REACT],text:"styled-components, CustomHook: useForm"},url:"https://seebaasiman.github.io/Chat-non-contact-whatsapp/"},{img:[De,$e,Pe,Xe,Ae],title:"heroes app",description:"",icon:st,tech:{icon:[r.HTML,r.CSS,r.REACT],text:"query-string, react-router-dom (private routes and public routes), API 'superheroapi', styled-components, useContext (Auth), useReducer, customHooks: useCardEffect, useForm, useGetHeroPage, useGetPublisher,useBagInvetory, useDragDice, useWindowResize"},url:"https://heroes-app-beige.vercel.app"},{img:[we],title:"calculator",icon:Qe,description:e==null?void 0:e.speech1,tech:{icon:[r.HTML,r.CSS,r.REACT],text:"useReducer, styled-components"},url:"https://seebaasiman.github.io/Calculator-useReducer/"},{img:[Ie,ke,He,Ee],title:"f1-fan",icon:Ze,description:e==null?void 0:e.speech2,tech:{icon:[r.HTML,r.CSS,r.REACT],text:"axios, react-router-dom, react-twitter-embed, Styled-components, API'ergast', customHooks: useCalendar, useCountdown, useDeviceType)"},url:"https://f1-fan.vercel.app/"},{img:[Le],title:"expenses calculator",icon:Ye,description:e==null?void 0:e.speech3,tech:{icon:[r.HTML,r.CSS,r.REACT],text:"Reduxjs/toolkit, animate.css, react-router-dom, sweetalert2,styled-components, boostrap, customHooks: useCostPerson, useForm"},url:"https://expenses-app-alpha-hazel.vercel.app/"},{img:[Oe,Ve,We],title:"journal app",icon:et,description:"",tech:{icon:[r.HTML,r.CSS,r.REACT],text:"firebase, react-router-dom, @reduxjs/toolkit, styled-components, sweetalert2, customHooks: useCheckAuth, useDraggable, useForm, useNoteView, useThemeMode"},url:"https://journal-app-eight-pi.vercel.app/"}]},bt=()=>{const[e,a]=p.useState(!1),t=ot(),o=t.slice(0,3),c=t.slice(3);return C(at,{children:[s(ct,{active:e,children:s(_,{setVerticalShow:a,verticalShow:e,listArray:o})}),s(it,{active:e,children:s(_,{setVerticalShow:a,verticalShow:e,listArray:c})})]})},at=x.div`
  height: 100vh;
  width: 100vw;
  transition: all 0.5s ease-in-out;
  /* background-color: ${e=>e.theme.bgApp}; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,J=x.section`
  /* background-color: ${e=>e.theme.bgApp}; */
  position: relative;
  color: black;
  width: 100vw;
  transition: all 0.5s ease-in-out;
`,ct=x(J)`
  height: ${e=>e.active?"0":"100vh"};
  opacity: ${e=>e.active?"0":"1"};
`,it=x(J)`
  height: ${e=>e.active?"100vh":"0"};
  opacity: ${e=>e.active?"1":"0"};
`;export{St as B,bt as S,ht as a,gt as d,H as i,mt as u};
