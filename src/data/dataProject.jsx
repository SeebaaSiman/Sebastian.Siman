import { useLanguage } from "/src/hook";

import calculatorimg from "@/assets/projects/calculator.jpg";
// import f1img from "@/assets/projects/f1.jpg";
import expensesimg from "@/assets/projects/expenses.jpg";
// import HeroesApp from "@/assets/projects/HeroesApp.jpg";
// import CelestialChronicle from "@/assets/projects/celestial-chronicle.jpg";
import chatNonContact from "@/assets/projects/Chat-non-contact-whatsapp.jpg";
// import journal from "@/assets/projects/journal.jpg";
import { IconTech } from "./iconTech";

export const dataProject = () => {
  const { texts } = useLanguage();

  const projects = [
    {
      img: [
        "/src/assets/projects/celestial-chronicle.jpg",
        "/src/assets/projects/celestial-chronicle2.jpg",
        "/src/assets/projects/celestial-chronicle3.jpg",
        "/src/assets/projects/celestial-chronicle4.jpg",
        "/src/assets/projects/celestial-chronicle5.jpg",
      ],
      title: "celestial chronicle",
      description: "",
      tech: {
        icon: [IconTech.HTML, IconTech.CSS, IconTech.REACT],
        text: "intersection-observer, react-router-dom, styled-components, customHooks: useCardPlanet, useCountDownTimer, useFetch, useLocalStorage",
      },
      url: "https://celestial-chronicle.vercel.app/",
    },
    {
      img: [chatNonContact],
      title: "chat-non-contact-whatsapp",
      description: "",
      tech: {
        icon: [IconTech.HTML, IconTech.CSS, IconTech.REACT],
        text: "styled-components, CustomHook: useForm",
      },
      url: "https://seebaasiman.github.io/Chat-non-contact-whatsapp/",
    },
    {
      img: [
        "/src/assets/projects/HeroesApp.jpg",
        "/src/assets/projects/HeroesApp2.jpg",
        "/src/assets/projects/HeroesApp3.jpg",
        "/src/assets/projects/HeroesApp4.jpg",
        "/src/assets/projects/HeroesApp5.jpg",
      ],
      title: "heroes app",
      description: "",
      tech: {
        icon: [IconTech.HTML, IconTech.CSS, IconTech.REACT],
        text: "query-string, react-router-dom (private routes and public routes), API 'superheroapi', styled-components, useContext (Auth), useReducer, customHooks: useCardEffect, useForm, useGetHeroPage, useGetPublisher,useBagInvetory, useDragDice, useWindowResize",
      },
      url: "https://heroes-app-beige.vercel.app",
    },
    {
      img: [calculatorimg],
      title: "calculator",
      description: texts?.speech1,
      tech: {
        icon: [IconTech.HTML, IconTech.CSS, IconTech.REACT],
        text: "useReducer, styled-components",
      },
      url: "https://seebaasiman.github.io/Calculator-useReducer/",
    },
    {
      img: [
        "/src/assets/projects/f1.jpg",
        "/src/assets/projects/f12.jpg",
        "/src/assets/projects/f13.jpg",
        "/src/assets/projects/f14.jpg",
      ],
      title: "f1-fan",
      description: texts?.speech2,
      tech: {
        icon: [IconTech.HTML, IconTech.CSS, IconTech.REACT],
        text: "axios, react-router-dom, react-twitter-embed, Styled-components, API'ergast', customHooks: useCalendar, useCountdown, useDeviceType)",
      },
      url: "https://f1-fan.vercel.app/",
    },
    {
      img: [expensesimg],
      title: "expenses calculator",
      description: texts?.speech3,
      tech: {
        icon: [IconTech.HTML, IconTech.CSS, IconTech.REACT],
        text: "Reduxjs/toolkit, animate.css, react-router-dom, sweetalert2,styled-components, boostrap, customHooks: useCostPerson, useForm",
      },
      url: "https://seebaasiman.github.io/Expenses-App/",
    },

    {
      img: [
        "/src/assets/projects/journal.jpg",
        "/src/assets/projects/journal2.jpg",
        "/src/assets/projects/journal3.jpg",
      ],
      title: "journal app",
      description: "",
      tech: {
        icon: [IconTech.HTML, IconTech.CSS, IconTech.REACT],
        text: "firebase, react-router-dom, @reduxjs/toolkit, styled-components, sweetalert2, customHooks: useCheckAuth, useDraggable, useForm, useNoteView, useThemeMode",
      },
      url: "https://journal-app-eight-pi.vercel.app/",
    },
  ];
  return projects;
};
