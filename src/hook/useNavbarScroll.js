import { useEffect, useRef } from 'react';

export const useNavbarScroll = (refs) => {
  const scrollSmoothHandler = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const homeRef = refs.home;
    const aboutRef = refs.about;
    const projectRef = refs.project;
    const contactRef = refs.contact;

    const homeBtn = document.querySelector('#homeBtn');
    const aboutBtn = document.querySelector('#aboutBtn');
    const projectBtn = document.querySelector('#projectBtn');
    const contactBtn = document.querySelector('#contactBtn');

    homeBtn.addEventListener('click', () => scrollSmoothHandler(homeRef));
    aboutBtn.addEventListener('click', () => scrollSmoothHandler(aboutRef));
    projectBtn.addEventListener('click', () => scrollSmoothHandler(projectRef));
    contactBtn.addEventListener('click', () => scrollSmoothHandler(contactRef));

    return () => {
      homeBtn.removeEventListener('click', () => scrollSmoothHandler(homeRef));
      aboutBtn.removeEventListener('click', () => scrollSmoothHandler(aboutRef));
      projectBtn.removeEventListener('click', () => scrollSmoothHandler(projectRef));
      contactBtn.removeEventListener('click', () => scrollSmoothHandler(contactRef));
    };
  }, [refs]);

  return { scrollSmoothHandler };
}



// function Navbar() {
//   const homeRef = useRef(null);
//   const aboutRef = useRef(null);
//   const projectRef = useRef(null);
//   const contactRef = useRef(null);

//   useNavbarScroll({ home: homeRef, about: aboutRef, project: projectRef, contact: contactRef });

//   return (
//     <nav>
//       <ul>
//         <li>
//           <button id="homeBtn">Home</button>
//         </li>
//         <li>
//           <button id="aboutBtn">About Me</button>
//         </li>
//         <li>
//           <button id="projectBtn">Projects</button>
//         </li>
//         <li>
//           <button id="contactBtn">Contact</button>
//         </li>
//       </ul>
//       <div ref={homeRef}> {/* sección Home */} </div>
//       <div ref={aboutRef}> {/* sección About */} </div>
//       <div ref={projectRef}> {/* sección Project */} </div>
//       <div ref={contactRef}> {/* sección Contact */} </div>
//     </nav>
//   );
// }
