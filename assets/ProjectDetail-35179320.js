import{d as t,b as f,u,a as n,j as i,r as b}from"./index-a383438f.js";import{p as v}from"./animations-d7bb6466.js";import{d as p}from"./device-de05c3c0.js";import{i as y}from"./icon-b74de6e1.js";const C=t.div`
padding: 1rem 0;
 width: 100%;
overflow-y:auto;
overflow-x: hidden;
height: 90dvh;
display: flex;
flex-direction: column;
gap: 12px;
 @media ${p.tablet} {
padding: 1rem 2rem;
 }
 @media ${p.laptop} {
padding: 1rem 4.5rem;
 }
 @media ${p.laptopL} {
padding: 1rem 5rem;
 }
 @media ${p.desktop} {
padding: 1rem 6.5rem;
 }

`,k=t.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 1rem;
img{
  width: 45px;
 @media ${p.tablet} {
  width: 50px;
 }
}
`,m=t.div`
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
`,L=t.div`
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
`,B=t.div`
  position: relative;
  padding-left: 12px;
  padding-top: 12px;
  width: 100%;
  height: auto;
  background: transparent;
  overflow: hidden;
  display: flex;
  border-bottom: 1px solid #ccc;
`,M=t.div`
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
}`,S=t.div`
  height: 35px;
  display: flex;
  align-items: center;
  width: 80%;
  padding: 5px;
  display: flex;
  gap: 10px;
`,$=t.div`
  display: none;
  @media (min-width: 500px) {
    display: flex;
  }`,N=t.div`
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
  animation: ${v} 3s ease-in-out infinite;
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
  `,T=t.div`
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
   `,Z=t.div`
    display: flex;
    flex-direction: column;
  justify-content: center;
  align-items: center;
   width: 100%;
   `,E=t.div`
 width:100%;
position:relative;
display: flex;
align-items: center;
justify-content: center;
padding:8px;
`,D=t.div`
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
 `,I=t.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  margin-top: 12px;
    transition:${e=>e.theme.transition};
  img {
    width: 14vw;
    max-width: 100px;
    object-fit: contain;
    border-radius: 10px;
    margin: 0 12px;
      transition:${e=>e.theme.transition};
    &:hover {
      box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5);
        transition:${e=>e.theme.transition};
    }
  }
`,w=t.button`
  background: #eee;
  border: none;
  font-size: 2rem;
  cursor: none;
  padding: 8px  ;
  border-radius: 50%;
    transition:${e=>e.theme.transition};
    display:flex;
    justify-content:center;
    align-items:center;
  &:hover {    background: #ccc;
        box-shadow:${e=>e.theme.cardShadow};
          transition:${e=>e.theme.transition};
  }
`,P=({children:e,projectUrl:o,projectTitle:l})=>{const{texts:a}=f(),{handleCursorNotSize:s,handleCursorSmall:c}=u();return n(L,{className:"browser-container",children:[n(B,{className:"browser-circles",children:[n(M,{className:"circles",children:[i("div",{className:"c"}),i("div",{className:"c"}),i("div",{className:"c"})]}),n(S,{className:"browser-tab",children:[n($,{className:"chevrons",children:[i("svg",{viewBox:"0 0 20 20",height:"16",width:"16",xmlns:"http://www.w3.org/2000/svg","data-name":"20",id:"_20",children:i("path",{transform:"translate(6.25 3.75)",d:"M0,6.25,6.25,0l.875.875L1.75,6.25l5.375,5.375L6.25,12.5Z",id:"Fill"})}),i("svg",{viewBox:"0 0 20 20",height:"16",width:"16",xmlns:"http://www.w3.org/2000/svg","data-name":"20",id:"_20",children:i("path",{transform:"translate(6.625 3.75)",d:"M7.125,6.25.875,12.5,0,11.625,5.375,6.25,0,.875.875,0Z",id:"Fill"})})]}),i(N,{className:"search-bar",children:n("a",{href:o,target:"_blank",onMouseEnter:s,onMouseLeave:c,children:[a.buttonVisit," ",l]})})]})]}),i(T,{children:e})]})},H=({project:e})=>{var s,c,x;const{texts:o}=f(),{handleCursorNotSize:l,handleCursorSmall:a}=u();return n(C,{children:[n(k,{children:[e.icon&&i("img",{src:e==null?void 0:e.icon,alt:`icon project ${e==null?void 0:e.title}`}),i("h2",{children:e==null?void 0:e.title})]}),n(m,{children:[n("h3",{children:[o.modalDescription,":"]}),i("p",{children:e==null?void 0:e.description})]}),n(m,{children:[n("h3",{children:[" ",o.modalTech,":"]}),i("div",{children:(c=(s=e==null?void 0:e.tech)==null?void 0:s.icon)==null?void 0:c.map((h,g)=>n("span",{children:[i("p",{children:h}),i("img",{src:y[h]})]},g))})]}),n(m,{children:[i("h3",{children:"Hooks:"}),i("p",{children:(x=e==null?void 0:e.tech)==null?void 0:x.text})]}),i(P,{projectUrl:e.url,projectTitle:e.title,children:i(R,{sliderImg:e.img,handleCursorNotSize:l,handleCursorSmall:a})})]})},R=({sliderImg:e,handleCursorNotSize:o,handleCursorSmall:l})=>{const[a,s]=b.useState(0),c=()=>s(r=>r===0?e.length-1:r-1),x=()=>s(r=>r===e.length-1?0:r+1),h=r=>s(r),g=` rgba(0, 0, 0, 0.5) 0px 2px 4px, rgba(0, 0, 0, 0.4) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.3) 0px -3px 0px inset`;return n(Z,{children:[n(E,{children:[i(w,{onClick:c,onMouseEnter:o,onMouseLeave:l,children:i("svg",{width:"25px",height:"25px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3165 19.0976 14.6834 19.0976 14.2929 18.7071L8.46963 12.8839C7.98148 12.3957 7.98148 11.6043 8.46963 11.1161L14.2929 5.29289C14.6834 4.90237 15.3165 4.90237 15.7071 5.29289Z",fill:"#000"})})}),i(D,{children:i("img",{src:e[a],alt:`Imagen ${a+1}`})}),i(w,{onClick:x,onMouseEnter:o,onMouseLeave:l,children:i("svg",{width:"25px",height:"25px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.5303 11.1161C16.0185 11.6043 16.0185 12.3957 15.5303 12.8839L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z",fill:"#000"})})})]}),i(I,{children:e.map((r,d)=>i("img",{src:r,alt:`Miniatura ${d+1}`,onMouseEnter:d===a?"":o,onMouseLeave:l,onClick:()=>h(d),style:{transform:d===a?"rotate(0deg)":"rotate(270deg)",boxShadow:d===a?g:"",scale:d===a?"1":"0.95",opacity:d===a?1:.75}},d))})]})};export{R as BrowserSlider,H as default};
