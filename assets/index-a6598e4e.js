import{u as I,b as m,j as o,c as y,a as d,R as E,F as A,d as L,I as N,e as b,T as k,f as g,g as w,h as B,i as x,k as O,l as z,m as D,n as R,o as j,N as P}from"./index-2235f59c.js";import{u as F,a as G,d as J,i as h,S as V}from"./SectionsProjects-03547a1c.js";const X=()=>{var S;const{handleCursorXs:C,handleCursorSmall:a}=I(),e=m(),{onActiveIcon:l,onActiveCopy:p,openPdf:v,isActiveIcon:M,isActiveCopy:t}=F(),{notSopported:r,copyError:c,copied:i,onClipboard:u}=G(),T=(n,s)=>{u(n),p(s)},f={[h.MAIL]:o(g,{size:"calc(2rem + 2vw)"}),[h.LINKEDIN]:o(w,{size:"calc(2rem + 2vw)"}),[h.GITHUB]:o(B,{size:"calc(2rem + 2vw)"}),[h.DOWNLOAD]:o(x,{size:"calc(2rem + 2vw)"})};return o(y,{children:(S=J)==null?void 0:S.map((n,s)=>d(E,{children:[d(e==="desktop"?O:z,{onMouseEnter:e==="desktop"?C:null,onMouseLeave:e==="desktop"?a:null,onClick:e!=="desktop"?()=>l(s):null,isActive:M[s],href:n.to,target:"_blank",rel:"noopener noreferrer",download:!0,children:[o(A,{children:f[n.icon]}),o("span",{children:e==="desktop"?`${n.text}`:d("a",{href:n.to,children:[n.text," "]})})]}),o(L,{onMouseEnter:e==="desktop"?C:null,onMouseLeave:e==="desktop"?a:null,onClick:n.text==="Sebastián Siman cv"?v:()=>T(n.copy,s),children:n.text==="Sebastián Siman cv"?o(N,{size:"calc(1.2rem + 1.2vw)"}):o(b,{size:"calc(1rem + 1vw)"})}),t[s]&&i&&o(k,{style:{color:"green"},children:n.copy}),t[s]&&r||c&&o(k,{style:{color:"red"},children:r||c})]},s))})},W=({scrollValue:C})=>{const{handleCursorXs:a,handleCursorSmall:e}=I(),{scrollToSection:l,page1Ref:p,aboutRef:v}=D(),{onOpenModal:M,TextModal:t}=R(),r=i=>{let u;i===t.PROJECT?u=o(V,{}):i===t.CONTACT&&(u=o(X,{})),M(u,String(i)),setTimeout(()=>{e(),l(p)},500)},{texts:c}=j();return d(P,{children:[o("ul",{children:o("li",{onMouseEnter:a,onMouseLeave:e,onClick:()=>l(p),children:"SEBASTIÁN SIMAN"})}),C>100&&d("ul",{children:[o("li",{onMouseEnter:a,onMouseLeave:e,onClick:()=>l(v),children:c.about}),o("li",{onMouseEnter:a,onMouseLeave:e,onClick:()=>r(t.PROJECT),children:c.project}),o("li",{onMouseEnter:a,onMouseLeave:e,onClick:()=>r(t.CONTACT),children:c.contact})]})]})};export{W as default};
