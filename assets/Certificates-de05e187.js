import{d as e,a as o,j as i,b as c,u as d}from"./index-a383438f.js";const l=e.section`
  height: 90dvh;
  width: 100%;
  overflow-y: auto;
  background-color: #ffffff;
  padding: 4rem 1rem;

  @media (min-width: 640px) {
    padding: 4rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem 2rem;
  }
`,m=e.div`
  max-width: 80rem;
  margin: 0 auto;
`,f=e.div`
  text-align: center;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 2.25rem;
    font-weight: 700;
    color: #1f2937;
    margin-left: 1rem;
  margin-bottom: 1.5rem;

    @media (min-width: 640px) {
      font-size: 3rem;
    }
  }
p{
  font-size: 1.25rem;
  color: #6b7280;
  max-width: 48rem;
  margin: 0 auto;
  line-height: 1.6;
}

`,p=e.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,n=e.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  /* padding: 0 1.5rem 1.5rem 1.5rem; */

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
`,g=e.div`
  padding: 1.5rem 1.5rem 1rem 1.5rem;
`,h=e.div`
  width: 100%;
  /* height: 12rem; */
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #f9fafb;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  ${n}:hover & img {
    transform: scale(1.06);
  }
`,u=e.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`,b=e.div`
  flex: 1;
`,x=e.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;

  ${n}:hover & {
    color: #111827;
  }
`,C=e.div`
  display: flex;
  align-items: center;
  color: #6b7280;
  margin-bottom: 0.5rem;

  span {
    font-size: 0.875rem;
    font-weight: 500;
    margin-left: 0.5rem;
  }
`,v=e.p`
  color: #111827;
  font-weight: 600;
`,w=e.div`
  padding: 0 1.5rem 1.5rem 1.5rem;
`,k=e.p`
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.6;
`,y=e.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`,S=e.span`
  background-color: rgba(5, 150, 105, 0.1);
  color: #111827;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #111827;
    color: #ffffff;
  }
`;e.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  color: #374151;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
cursor:none;
  &:hover {
    background-color: #111827;
    color: #ffffff;
    border-color: #111827;
  }

  ${n}:hover & {
    background-color: #111827;
    color: #ffffff;
    border-color: #111827;
  }
`;const j=e.div`
  text-align: center;
  background: #ffffff;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 1rem;
  }

  p {
    color: #6b7280;
    margin-bottom: 1.5rem;
    max-width: 32rem;
    margin-left: auto;
    margin-right: auto;
  }
`,A=e.a`
  background-color: #111827;
  color: #ffffff;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 600;  cursor:none;
  text-decoration: none;
  text-transform: none;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #ffffff;
    color:#111827;
  }
  &:active{
    scale:0.95;
  }
`,I=({cert:r,handleCursorXs:t,handleCursorSmall:s})=>o(n,{children:[o(g,{children:[r.image&&i(h,{children:i("img",{src:r.image||"/placeholder.svg",alt:`${r.title} certificate`})}),i(u,{children:o(b,{children:[i(x,{children:r.title}),i(C,{children:i("span",{children:r.date})}),i(v,{children:r.issuer})]})})]}),o(w,{children:[i(k,{children:r.description}),i(y,{children:r.skills.map(a=>i(S,{onMouseEnter:t,onMouseLeave:s,children:a},a))})]})]},r.id),z="/Sebastian.Siman/assets/front end js certificacion-2bca1668.jpg",M="/Sebastian.Siman/assets/React JS certificacion-a8f65e3d.jpg",E="/Sebastian.Siman/assets/IIA-ec702bcb.jpg",T=()=>(c(),[{id:"1",title:"Front-End JS Developer Certification",issuer:"Ministerio de Educación Buenos Aires",date:"2024",description:"Certificación profesional que valida la experiencia en el diseño de aplicaciones con Javascript.",skills:["HTML","CSS ","Javascript","Apis Rest","DOM","CRUD","GIT"],credentialUrl:"#",image:z},{id:"2",title:"React JS Developer Certification",issuer:"Ministerio de Educación Buenos Aires",date:"2025",description:"Certificación que demuestra habilidades avanzadas en desarrollo de aplicaciones en React JS, incluyendo hooks, routing y gestión de estado.",skills:["hooks","react router","context api","CRUD","autenticacion de usuarios","estilos responsive","GIT"],credentialUrl:"#",image:M},{id:"3",title:"Introducción a la IA y sus Aplicaciones",issuer:"Ministerio de Educación Buenos Aires",date:"2025",description:"Certificación que avala conocimientos básicos sobre inteligencia artificial y sus aplicaciones prácticas en el desarrollo de software.",skills:["Conceptos básicos de IA","Aplicaciones prácticas","Ética en IA","Herramientas y tecnologías","Tipos de IA"],credentialUrl:"#",image:E}]),J=()=>{const{handleCursorXs:r,handleCursorSmall:t}=d(),s=T();return i(l,{children:o(m,{children:[o(f,{children:[i("h1",{children:"Certificaciones Profesionales"}),i("p",{children:"Una colección de certificaciones que validan mi experiencia técnica y compromiso con el aprendizaje continuo en tecnologías de vanguardia."})]}),i(p,{children:s.map(a=>i(I,{cert:a,handleCursorXs:r,handleCursorSmall:t}))}),o(j,{children:[i("h3",{children:"¿Interesado en colaborar en mi desarrollo?"}),i("p",{children:"Estas certificaciones respaldan mi experiencia técnica. Estoy siempre dispuesto a aplicar estos conocimientos en proyectos desafiantes."}),i(A,{onMouseEnter:r,onMouseLeave:t,href:"mailto:seebaasiman@gmail.com",target:"_blank",rel:"noopener noreferrer",children:"Contactar para crecer juntos"})]})]})})};export{J as default};
