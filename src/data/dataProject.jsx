import { useLanguage } from "/src/hook";

import calculatorimg from "@/assets/projects/calculator.jpg";
import f1img from "@/assets/projects/f1.jpg";
import f1img2 from "@/assets/projects/f12.jpg";
import f1img3 from "@/assets/projects/f13.jpg";
import f1img4 from "@/assets/projects/f14.jpg";
import expensesimg from "@/assets/projects/expenses.jpg";
import HeroesApp from "@/assets/projects/HeroesApp.jpg";
import HeroesApp2 from "@/assets/projects/HeroesApp2.jpg";
import HeroesApp3 from "@/assets/projects/HeroesApp3.jpg";
import HeroesApp4 from "@/assets/projects/HeroesApp4.jpg";
import HeroesApp5 from "@/assets/projects/HeroesApp5.jpg";
import CelestialChronicle from "@/assets/projects/celestial-chronicle.jpg";
import CelestialChronicle2 from "@/assets/projects/celestial-chronicle2.jpg";
import CelestialChronicle3 from "@/assets/projects/celestial-chronicle3.jpg";
import CelestialChronicle4 from "@/assets/projects/celestial-chronicle4.jpg";
import CelestialChronicle5 from "@/assets/projects/celestial-chronicle5.jpg";
import chatNonContact from "@/assets/projects/Chat-non-contact-whatsapp.jpg";
import journal from "@/assets/projects/journal.jpg";
import journal2 from "@/assets/projects/journal2.jpg";
import journal3 from "@/assets/projects/journal3.jpg";
import { IconTech } from "./iconTech";

import celestialicon from "@/assets/projects/icons/celestial.png";
import calculatoricon from "@/assets/projects/icons/calculator.ico";
import expensesicon from "@/assets/projects/icons/expenses.png";
import f1icon from "@/assets/projects/icons/f1.png";
import journalicon from "@/assets/projects/icons/journal.png";
import nonchaticon from "@/assets/projects/icons/nonchat.png";
import heroesicon from "@/assets/projects/icons/heroes.png";
export const dataProject = () => {
  const { texts } = useLanguage();

  const projects = [
    {
      img: [
        CelestialChronicle,
        CelestialChronicle2,
        CelestialChronicle3,
        CelestialChronicle4,
        CelestialChronicle5,
      ],
      icon: celestialicon,
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
      title: "chat non contact whatsapp",
      description: "",
      icon: nonchaticon,
      tech: {
        icon: [IconTech.HTML, IconTech.CSS, IconTech.REACT],
        text: "styled-components, CustomHook: useForm",
      },
      url: "https://seebaasiman.github.io/Chat-non-contact-whatsapp/",
    },
    {
      img: [HeroesApp, HeroesApp2, HeroesApp3, HeroesApp4, HeroesApp5],
      title: "heroes app",
      description: "",
      icon: heroesicon,
      tech: {
        icon: [IconTech.HTML, IconTech.CSS, IconTech.REACT],
        text: "query-string, react-router-dom (private routes and public routes), API 'superheroapi', styled-components, useContext (Auth), useReducer, customHooks: useCardEffect, useForm, useGetHeroPage, useGetPublisher,useBagInvetory, useDragDice, useWindowResize",
      },
      url: "https://heroes-app-beige.vercel.app",
    },
    {
      img: [calculatorimg],
      title: "calculator",
      icon: calculatoricon,
      description: texts?.speech1,
      tech: {
        icon: [IconTech.HTML, IconTech.CSS, IconTech.REACT],
        text: "useReducer, styled-components",
      },
      url: "https://seebaasiman.github.io/Calculator-useReducer/",
    },
    {
      img: [f1img, f1img2, f1img3, f1img4],
      title: "f1-fan",
      icon: f1icon,
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
      icon: expensesicon,
      description: texts?.speech3,
      tech: {
        icon: [IconTech.HTML, IconTech.CSS, IconTech.REACT],
        text: "Reduxjs/toolkit, animate.css, react-router-dom, sweetalert2,styled-components, boostrap, customHooks: useCostPerson, useForm",
      },
      url: "https://expenses-app-alpha-hazel.vercel.app/",
    },

    {
      img: [journal, journal2, journal3],
      title: "journal app",
      icon: journalicon,
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
