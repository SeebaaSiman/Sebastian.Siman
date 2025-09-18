import{a,j as e,d as r}from"./index-7fb03883.js";import{d as n}from"./device-de05c3c0.js";import{B as s}from"./BtnGlass-beac380c.js";import"./buttons-a0b7ee26.js";import"./animations-c735709b.js";const i="/Sebastian.Siman/assets/Sebastian_Siman-94c861b1.pdf",f=()=>a(o,{children:[e(s,{ahref:i,$right:!0,download:!0,rel:"noreferrer",target:"_blank",children:"Descargar CV"}),e("iframe",{src:i,title:"CV_Sebastian_Siman PDF"})]}),o=r.section`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 100vw;
  height: 100dvh;
  transition: ${t=>t.theme.transition};
  iframe {
    border-radius: 8px;
    border: none;
    margin: 0 10px;
    width: 95%;
    height: calc(100dvh - 70px);
    box-shadow: ${t=>t.theme.cardShadow};
    transition: ${t=>t.theme.transition};
    @media ${n.tablet} {
      width: 80%;
    }
  }
`;export{f as default};
